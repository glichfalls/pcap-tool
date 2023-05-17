package utils

import (
	"bytes"
	"fmt"
	"golang.org/x/crypto/ssh"
	"log"
)

func sshConnect(config *NboxConfig) *ssh.Client {
	sshConfig := &ssh.ClientConfig{
		User: config.Username,
		Auth: []ssh.AuthMethod{
			ssh.Password(config.Password),
		},
		HostKeyCallback: ssh.InsecureIgnoreHostKey(),
	}
	con, err := ssh.Dial("tcp", config.Host, sshConfig)
	if err != nil {
		fmt.Println("failed to connect")
		fmt.Println(err)
		return nil
	}
	return con
}

func createSession(config *NboxConfig) *ssh.Session {
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
	config := LoadNboxConfig()
	session := createSession(config)
	if session == nil {
		return false
	}
	command := fmt.Sprintf("n2disk -i %s -o /tmp/recording -u %s -I -A /tmp/recording", config.Username, config.Interface)
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

func downloadOutput() {

}
