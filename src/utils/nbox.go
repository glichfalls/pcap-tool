package utils

import (
	"bytes"
	"context"
	"fmt"
	"github.com/bramvdbogaerde/go-scp"
	"golang.org/x/crypto/ssh"
	"os"
	"strconv"
	"strings"
	"time"
)

func sshConnect(config *NboxConfig) (*ssh.Client, error) {
	sshConfig := &ssh.ClientConfig{
		User: config.Username,
		Auth: []ssh.AuthMethod{
			ssh.Password(config.Password),
		},
		Timeout:         3 * time.Second,
		HostKeyCallback: ssh.InsecureIgnoreHostKey(),
	}
	fmt.Println("Creating ssh connection")
	con, err := ssh.Dial("tcp", config.Host, sshConfig)
	if err != nil {
		fmt.Println(fmt.Errorf("failed to connect: %v", err))
		return nil, err
	}
	return con, nil
}

func createSession(config *NboxConfig) (*ssh.Session, error) {
	connection, err := sshConnect(config)
	if err != nil {
		return nil, err
	}
	fmt.Println("Creating ssh session")
	session, err := connection.NewSession()
	if err != nil {
		fmt.Println(fmt.Errorf("failed to create session: %v", err))
		return nil, err
	}
	return session, nil
}

func createScpClient(config *NboxConfig) (*scp.Client, error) {
	connection, err := sshConnect(config)
	if err != nil {
		return nil, err
	}
	fmt.Println("Creating scp client")
	client, err := scp.NewClientBySSH(connection)
	if err != nil {
		fmt.Println("Error creating new SSH session from existing connection", err)
	}
	err = client.Connect()
	if err != nil {
		fmt.Println("Couldn't establish a connection to the remote server ", err)
		return nil, err
	}
	return &client, nil
}

func runCommand(session *ssh.Session, command string) (*bytes.Buffer, error) {
	var output bytes.Buffer
	session.Stdout = &output
	if err := session.Start(command); err != nil {
		fmt.Println(fmt.Sprintf("failed to run command over ssh session: %s", err))
		return nil, err
	} else {
		return &output, nil
	}
}

func runCombinedOutputCommand(session *ssh.Session, command string) (string, error) {
	if out, err := session.CombinedOutput(command); err != nil {
		fmt.Println(fmt.Sprintf("failed to run command over ssh session: %s", err))
		return "", err
	} else {
		return string(out), nil
	}
}

func getSudoCommand(command string, password string) string {
	return fmt.Sprintf("echo %s | sudo -S %s", password, command)
}

func getRecordingDirectory(config *NboxConfig) string {
	return fmt.Sprintf("%s/recordings", config.Directory)
}

type RecordingOptions struct {
	Duration int `json:"duration"`
	Size     int `json:"size"`
}

func IsRecordingRunning(pid string) (bool, error) {
	config := LoadNboxConfig()
	session, err := createSession(config)
	if err != nil {
		return false, fmt.Errorf("failed to dial: %v", err)
	}
	defer session.Close()
	command := getSudoCommand(fmt.Sprintf("kill -0 %s 2>/dev/null; echo $?", pid), config.Password)
	out, err := runCombinedOutputCommand(session, command)
	if err != nil {
		fmt.Println(err)
		return false, fmt.Errorf("failed to check process status: %v", err)
	}
	err = session.Close()
	exitCode := out
	return exitCode == "0\n", nil
}

func StartRecording(options RecordingOptions) (int, error) {
	config := LoadNboxConfig()
	session, err := createSession(config)
	if err != nil {
		return 0, fmt.Errorf("failed to dial: %v", err)
	}
	defer session.Close()

	// Construct the command to start the recording
	command := fmt.Sprintf(
		"nohup sh -c 'echo %s | sudo -S n2disk -i %s -o %s -u %s -P %s -L",
		config.Password,
		config.Interface,
		getRecordingDirectory(config),
		config.Username,
		config.Directory,
	)

	if options.Size == 0 || options.Duration == 0 {
		command = fmt.Sprintf("%s -t %d", command, 10)
	} else if options.Size != 0 {
		command = fmt.Sprintf("%s -p %d", command, options.Size)
	} else if options.Duration != 0 {
		command = fmt.Sprintf("%s -t %d", command, options.Duration)
	}

	// Append the command to echo the PID without the password prompt
	command = fmt.Sprintf("%s >/dev/null 2>&1 & echo $!'", command)

	output, err := runCombinedOutputCommand(session, command)
	if err != nil {
		return 0, fmt.Errorf("failed to run command: %v", err)
	}

	// Extract the PID from the output
	pidStr := strings.TrimSpace(output)
	pid, err := strconv.Atoi(pidStr)
	if err != nil {
		return 0, fmt.Errorf("failed to parse PID: %v", err)
	}

	// Adjust the PID by incrementing it by 1
	pid++

	return pid, nil
}

func StopRecording(pid string) (string, error) {
	config := LoadNboxConfig()
	session, err := createSession(config)
	if err != nil {
		return "", err
	}
	command := getSudoCommand(fmt.Sprintf("kill -s 2 %s", pid), config.Password)
	output, err := runCombinedOutputCommand(session, command)
	if err != nil {
		fmt.Println(err)
		return "", err
	}
	err = session.Close()
	if err != nil {
		fmt.Println(err)
		return "", err
	}
	return output, nil
}

func ReplayTraffic() (string, error) {
	config := LoadNboxConfig()
	session, err := createSession(config)
	if err != nil {
		return "", err
	}
	replayPcapFile := fmt.Sprintf("%s/test.pcap", config.Directory)
	command := getSudoCommand(
		fmt.Sprintf("disk2n -i enp216s0f0 -f %s", replayPcapFile),
		config.Password,
	)
	output, err := runCombinedOutputCommand(session, command)
	if err != nil {
		fmt.Println(err)
		return "", err
	}
	err = session.Close()
	if err != nil {
		fmt.Println(err)
		return "", err
	}
	return output, nil
}

func ListRecordings() (string, error) {
	config := LoadNboxConfig()
	session, err := createSession(config)
	if err != nil {
		return "", err
	}
	output, err := runCommand(session, fmt.Sprintf("ls %s", getRecordingDirectory(config)))
	if err != nil {
		fmt.Println(err)
		return "", err
	}
	err = session.Close()
	if err != nil {
		fmt.Println(err)
		return "", err
	}
	return output.String(), nil
}

func DownloadRecordingOutput(name string) (string, error) {
	config := LoadNboxConfig()
	client, err := createScpClient(config)
	if err != nil {
		return "", err
	}
	remoteFilePath := fmt.Sprintf("%s/%s.pcap", config.Directory, name)
	clientFileName := "download.pcap"
	clientFile, err := os.Create(clientFileName)
	if err != nil {
		fmt.Println(err)
		return "", err
	}
	err = client.CopyFromRemote(context.Background(), clientFile, remoteFilePath)
	if err != nil {
		fmt.Println(fmt.Sprintf("Error while downloading file: %s", err))
		return "", err
	}
	return clientFileName, nil
}
