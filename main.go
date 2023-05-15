package main

import (
	"github.com/gin-gonic/gin"
	"main/broker"
	"net/http"
)

func setupRouter() *gin.Engine {
	router := gin.Default()

	router.GET("/ping", func(context *gin.Context) {
		context.String(http.StatusOK, "pong")
	})

	router.GET("/api/ports", func(context *gin.Context) {
		ports := broker.GetPorts()
		context.JSON(http.StatusOK, ports)
	})

	return router
}

func main() {
	router := setupRouter()
	router.Run(":8000")
}
