package broker

import (
	"encoding/base64"
	"encoding/json"
	"fmt"
	"main/utils"
	"net/http"
)

func basicAuth(username, password string) string {
	auth := username + ":" + password
	return base64.StdEncoding.EncodeToString([]byte(auth))
}

func createGetRequest(uri string) *http.Request {
	config := utils.LoadPacketBrokerConfig()
	url := fmt.Sprintf("https://%s:%s/%s", config.Host, config.Port, uri)
	request, _ := http.NewRequest("GET", url, nil)
	request.Header.Add("Authorization", "Basic "+basicAuth(config.Username, config.Password))
	request.Header.Set("Content-Type", "application/json")
	request.Header.Set("Accept", "application/json")
	return request
}

func getFilter() {

}

func GetPorts() interface{} {
	client := &http.Client{}
	request := createGetRequest("ports")
	response, err := client.Do(request)
	if err != nil {
		return nil
	}
	defer response.Body.Close()
	var data interface{}
	err = json.NewDecoder(response.Body).Decode(&data)
	if err != nil {
		return nil
	}
	return data
}
