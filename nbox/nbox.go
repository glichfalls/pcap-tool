package nbox

import (
	"bytes"
	"fmt"
	"golang.org/x/crypto/ssh"
	"log"
	"main/utils"
)

func sshConnect(config *utils.NboxConfig) *ssh.Client {
	sshConfig := &ssh.ClientConfig{
		User: config.Username,
		Auth: []ssh.AuthMethod{
			ssh.Password(config.Password),
		},
	}
	con, err := ssh.Dial("tcp", config.Host, sshConfig)
	if err != nil {
		fmt.Println("failed to connect")
		fmt.Println(err)
		return nil
	}
	return con
}

func createSession(config *utils.NboxConfig) *ssh.Session {
	connection := sshConnect(config)
	if connection == nil {
		return nil
	}
	session, err := connection.NewSession()
	if err != nil {
		log.Fatal(err)
		return nil
	}
	return session
}

func runCommand(session *ssh.Session, command string) *bytes.Buffer {
	var output bytes.Buffer
	session.Stdout = &output
	if err := session.Run(command); err != nil {
		log.Fatal(err)
		return nil
	}
	return &output
}

func getSudoCommand(command string, password string) string {
	return fmt.Sprintf("echo %s | sudo -S %s", password, command)
}

func StartRecording() bool {
	config := utils.LoadNboxConfig()
	session := createSession(config)
	if session == nil {
		return false
	}
	command := fmt.Sprintf("n2disk -i %s -o /tmp/recording", config.Interface)
	command = getSudoCommand(command, config.Password)
	if output := runCommand(session, command); output == nil {
		return false
	}
	return true
}

func ReplayTraffic() bool {
	config := utils.LoadNboxConfig()
	session := createSession(config)
	if session == nil {
		return false
	}
	command := getSudoCommand("disk2n -i enp216s0f0 -f /tmp/test.pcap", config.Password)
	if output := runCommand(session, command); output == nil {
		return false
	}
	return true
}