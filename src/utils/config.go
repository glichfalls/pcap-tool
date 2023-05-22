package utils

import (
	"encoding/json"
	"fmt"
	"io"
	"os"
)

type NboxConfig struct {
	Host      string `json:"host"`
	Username  string `json:"username"`
	Password  string `json:"password"`
	Interface string `json:"interface"`
	Directory string `json:"directory"`
}

type BrokerConfig struct {
	Host     string `json:"host"`
	Port     string `json:"port"`
	Username string `json:"username"`
	Password string `json:"password"`
	Filter   string `json:"filter"`
}

func readJson(name string) ([]byte, error) {
	fileName := fmt.Sprintf("config/%s.json", name)
	if _, err := os.Stat(fileName); err == nil {
		jsonFile, err := os.Open(fileName)
		if err != nil {
			fmt.Println(err)
			return nil, err
		}
		defer jsonFile.Close()
		return io.ReadAll(jsonFile)
	} else {
		fmt.Println(fmt.Sprintf("config %s not found", fileName))
		return nil, nil
	}
}

func LoadNboxConfig() *NboxConfig {
	var config NboxConfig
	bytes, err := readJson("nbox")
	if err != nil {
		fmt.Println(err)
		return nil
	}
	if bytes == nil {
		fmt.Println("config is empty")
		return nil
	}
	err = json.Unmarshal(bytes, &config)
	if err != nil {
		fmt.Println(err)
		return nil
	}
	return &config
}

func LoadPacketBrokerConfig() *BrokerConfig {
	var config BrokerConfig
	bytes, err := readJson("broker")
	if err != nil {
		fmt.Println(err)
		return nil
	}
	if bytes == nil {
		fmt.Println("config is empty")
		return nil
	}
	err = json.Unmarshal(bytes, &config)
	if err != nil {
		fmt.Println(err)
		return nil
	}
	return &config
}
