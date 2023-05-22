package utils

import (
	"bytes"
	"context"
	"fmt"
	"github.com/bramvdbogaerde/go-scp"
	"golang.org/x/crypto/ssh"
	"os"
	"time"
)

func sshConnect(config *NboxConfig) *ssh.Client {
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
		fmt.Println(fmt.Sprintf("failed to connect: %s", err))
		return nil
	}
	return con
}

func createSession(config *NboxConfig) *ssh.Session {
	connection := sshConnect(config)
	if connection == nil {
		return nil
	}
	fmt.Println("Creating ssh session")
	session, err := connection.NewSession()
	if err != nil {
		fmt.Println(fmt.Sprintf("failed to create session: %s", err))
		return nil
	}
	return session
}

func createScpClient(config *NboxConfig) *scp.Client {
	connection := sshConnect(config)
	fmt.Println("Creating scp client")
	client, err := scp.NewClientBySSH(connection)
	if err != nil {
		fmt.Println("Error creating new SSH session from existing connection", err)
	}
	err = client.Connect()
	if err != nil {
		fmt.Println("Couldn't establish a connection to the remote server ", err)
		return nil
	}
	return &client
}

func runCommand(session *ssh.Session, command string) *bytes.Buffer {
	var output bytes.Buffer
	session.Stdout = &output
	fmt.Println("Running command over ssh")
	if err := session.Start(command); err != nil {
		fmt.Println(fmt.Sprintf("failed to run command over ssh session: %s", err))
		return nil
	}
	return &output
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

func StartRecording(options RecordingOptions) bool {
	config := LoadNboxConfig()
	session := createSession(config)
	if session == nil {
		return false
	}
	// https://www.ntop.org/guides/n2disk/usage.html
	// https://github.com/ntop/ntopng/blob/d65bb0c1438a393bca532286a6270bbaba028c50/scripts/lua/modules/recording_utils.lua#L1015
	command := fmt.Sprintf(
		"nohup n2disk -i %s -o %s -u %s -P %s -L",
		config.Interface,
		getRecordingDirectory(config),
		config.Username,
		config.Directory,
	)

	if options.Size == 0 || options.Duration == 0 {
		// if both are 0, run n2disk for 10 seconds
		command = fmt.Sprintf("%s -t %d", command, 10)
	} else if options.Size != 0 {
		// [--max-file-len|-p] <len> | Max pcap file length (MBytes).
		command = fmt.Sprintf("%s -p %d", command, options.Size)
	} else if options.Duration != 0 {
		// [--max-file-duration|-t] <secs> | Max pcap file duration (sec).
		command = fmt.Sprintf("%s -t %d", command, options.Duration)
	}
	// https://serverfault.com/a/36436
	// < /dev/null > /tmp/n2disk.log 2>&1 &
	// chat gpt says: >/dev/null 2>&1 &
	command = fmt.Sprintf("%s >/dev/null 2>&1 &", command)
	fmt.Println(command)
	command = getSudoCommand(command, config.Password)
	output := runCommand(session, command)
	err := session.Close()
	if err != nil {
		fmt.Println(err)
	}
	return output != nil
}

func ReplayTraffic() bool {
	config := LoadNboxConfig()
	session := createSession(config)
	if session == nil {
		return false
	}
	replayPcapFile := fmt.Sprintf("%s/test.pcap", config.Directory)
	command := getSudoCommand(
		fmt.Sprintf("disk2n -i enp216s0f0 -f %s", replayPcapFile),
		config.Password,
	)
	output := runCommand(session, command)
	err := session.Close()
	if err != nil {
		fmt.Println(err)
	}
	return output != nil
}

func ListRecordings() *string {
	config := LoadNboxConfig()
	session := createSession(config)
	if session == nil {
		return nil
	}
	output := runCommand(session, fmt.Sprintf("ls %s", getRecordingDirectory(config)))
	err := session.Close()
	if err != nil {
		fmt.Println(err)
	}
	list := output.String()
	return &list
}

func DownloadRecordingOutput(name string) string {
	config := LoadNboxConfig()
	client := createScpClient(config)
	remoteFilePath := fmt.Sprintf("%s/%s.pcap", config.Directory, name)
	clientFileName := "download.pcap"
	clientFile, _ := os.Create(clientFileName)
	err := client.CopyFromRemote(context.Background(), clientFile, remoteFilePath)
	if err != nil {
		fmt.Println(fmt.Sprintf("Error while downloading file: %s", err))
	}
	return clientFileName
}
