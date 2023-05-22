package utils

import (
	"bytes"
	"crypto/tls"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

func basicAuth(username, password string) string {
	auth := username + ":" + password
	return base64.StdEncoding.EncodeToString([]byte(auth))
}

func createRequest(method string, uri string, body io.Reader) *http.Request {
	config := LoadPacketBrokerConfig()
	url := fmt.Sprintf("https://%s:%s/%s", config.Host, config.Port, uri)
	request, _ := http.NewRequest(method, url, body)
	request.Header.Add("Authorization", "Basic "+basicAuth(config.Username, config.Password))
	request.Header.Set("Content-Type", "application/json")
	request.Header.Set("Accept", "application/json")
	return request
}

func createHttpClient() *http.Client {
	tr := &http.Transport{
		TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
	}
	c := &http.Client{Transport: tr}
	return c
}

func sendRequest(request *http.Request) interface{} {
	client := createHttpClient()
	response, err := client.Do(request)
	if err != nil {
		fmt.Println(err)
		return nil
	}
	defer response.Body.Close()
	var data interface{}
	err = json.NewDecoder(response.Body).Decode(&data)
	if err != nil {
		fmt.Println(err)
		return nil
	}
	return data
}

func getJson(uri string) interface{} {
	return sendRequest(createRequest("GET", uri, nil))
}

func postJson(uri string, body io.Reader) interface{} {
	return sendRequest(createRequest("POST", uri, body))
}

func putJson(uri string, body io.Reader) interface{} {
	return sendRequest(createRequest("PUT", uri, body))
}

func UpdateFilter(data []byte) interface{} {
	config := LoadPacketBrokerConfig()
	return putJson(
		fmt.Sprintf("api/filters/%s?allowTemporaryDataLoss=true", config.Filter),
		bytes.NewBuffer(data),
	)
}

func GetFilter() interface{} {
	config := LoadPacketBrokerConfig()
	return getJson(fmt.Sprintf("api/filters/%s", config.Filter))
}

func GetPorts() interface{} {
	return getJson("api/ports")
}

func GetStats() interface{} {
	config := LoadPacketBrokerConfig()
	var data = fmt.Sprintf(`{"stat_name": ["df_current_pass_rate_bits", "stats_time"], "filter": "%s"}`, config.Filter)
	return postJson("api/stats", bytes.NewBuffer([]byte(data)))
}
