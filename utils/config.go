package utils

import (
	"encoding/json"
	"fmt"
	"io"
	"os"
)

type NboxConfig struct {
	Host     string `json:"host"`
	Username string `json:"username"`
	Password string `json:"password"`
}

type BrokerConfig struct {
	Host     string `json:"auth:host"`
	Port     string `json:"auth:port"`
	Username string `json:"auth:username"`
	Password string `json:"auth:password"`
	Filter   string `json:"filter"`
}

func readJson(name string) ([]byte, error) {
	fileName := fmt.Sprintf("config/%s.json", name)
	if _, err := os.Stat(fileName); err == nil {
		jsonFile, err := os.Open(fileName)
		if err != nil {
			fmt.Println(err)
		}
		defer jsonFile.Close()
		return io.ReadAll(jsonFile)
	} else {
		fmt.Println(fmt.Sprintf("config %s not found", fileName))
		return nil, nil
	}
}

func loadNboxConfig() *NboxConfig {
	var config NboxConfig
	bytes, _ := readJson("nbox")
	if bytes == nil {
		return nil
	}
	err := json.Unmarshal(bytes, &config)
	if err != nil {
		return nil
	}
	return &config
}

func LoadPacketBrokerConfig() *BrokerConfig {
	var config BrokerConfig
	bytes, _ := readJson("broker")
	if bytes == nil {
		return nil
	}
	err := json.Unmarshal(bytes, &config)
	if err != nil {
		return nil
	}
	return &config
}
