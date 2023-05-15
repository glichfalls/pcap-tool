package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func setupRouter() *gin.Engine {
	router := gin.Default()

	router.GET("/ping", func(context *gin.Context) {
		context.String(http.StatusOK, "pong")
	})

	return router
}

func main() {
	router := setupRouter()
	router.Run(":8000")
}
