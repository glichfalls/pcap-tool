package utils

import (
	"bytes"
	"context"
	"fmt"
	"github.com/bramvdbogaerde/go-scp"
	"golang.org/x/crypto/ssh"
	"os"
)

func sshConnect(config *NboxConfig) *ssh.Client {
	sshConfig := &ssh.ClientConfig{
		User: config.Username,
		Auth: []ssh.AuthMethod{
			ssh.Password(config.Password),
		},
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
	if err := session.Run(command); err != nil {
		fmt.Println(fmt.Sprintf("failed to run command over ssh session: %s", err))
		return nil
	}
	return &output
}

func getSudoCommand(command string, password string) string {
	return fmt.Sprintf("echo %s | sudo -S %s", password, command)
}

type RecordingOptions struct {
	Duration *int32 `json:"duration"`
	Size     *int32 `json:"size"`
}

func StartRecording(options RecordingOptions) bool {
	config := LoadNboxConfig()
	session := createSession(config)
	if session == nil {
		return false
	}
	// https://www.ntop.org/guides/n2disk/usage.html
	// https://github.com/ntop/ntopng/blob/d65bb0c1438a393bca532286a6270bbaba028c50/scripts/lua/modules/recording_utils.lua#L1015
	command := fmt.Sprintf("n2disk -i %s -o /tmp/recording -u %s -L", config.Interface, config.Username)
	if options.Size == nil || options.Duration == nil {
		// if both are null, run n2disk for 10 seconds
		command = fmt.Sprintf("%s -t %d", command, 10)
	}
	if options.Size != nil {
		// [--max-file-len|-p] <len> | Max pcap file length (MBytes).
		command = fmt.Sprintf("%s -p %d", command, options.Size)
	}
	if options.Duration != nil {
		// [--max-file-duration|-t] <secs> | Max pcap file duration (sec).
		command = fmt.Sprintf("%s -t %d", command, options.Duration)
	}
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
	command := getSudoCommand("disk2n -i enp216s0f0 -f /tmp/test.pcap", config.Password)
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
	output := runCommand(session, fmt.Sprintf("ls %s", config.Directory))
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
	clientFileName := "/tmp/download.pcap"
	clientFile, _ := os.Create(clientFileName)
	err := client.CopyFromRemote(context.Background(), clientFile, remoteFilePath)
	if err != nil {
		fmt.Println(fmt.Sprintf("Error while downloading file: %s", err))
	}
	return clientFileName
}
