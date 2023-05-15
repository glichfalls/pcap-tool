package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"main/broker"
	"main/nbox"
	"net/http"
)

func setupRouter() *gin.Engine {
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()

	router.GET("/heartbeat", func(context *gin.Context) {
		context.JSON(http.StatusOK, gin.H{
			"status": "ok",
		})
	})

	router.GET("/api/ports", func(context *gin.Context) {
		ports := broker.GetPorts()
		context.JSON(http.StatusOK, ports)
	})

	router.GET("/api/filter", func(context *gin.Context) {
		context.JSON(http.StatusOK, broker.GetFilter())
	})

	router.PUT("/api/filter", func(context *gin.Context) {
		var filters broker.Filters
		if err := context.BindJSON(&filters); err != nil {
			context.JSON(400, gin.H{
				"error": "failed to parse body",
			})
		}
		broker.UpdateFilter(filters)
	})

	router.POST("/api/recording/start", func(context *gin.Context) {
		nbox.StartRecording()
	})

	router.POST("/api/recording/replay", func(context *gin.Context) {
		nbox.ReplayTraffic()
	})

	return router
}

func main() {
	router := setupRouter()
	err := router.Run(":8000")
	if err != nil {
		fmt.Println(err)
		return
	}
}
