package main

import (
	"embed"
	"fmt"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	"main/broker"
	"main/nbox"
	"main/utils"
	"net/http"
	"strings"
)

//go:embed public/*
var app embed.FS

func setupRouter() *gin.Engine {
	gin.SetMode(gin.ReleaseMode)
	r := gin.Default()

	dist := utils.EmbedFolder(app, "public")
	staticServer := static.Serve("/", dist)

	r.Use(staticServer)
	r.NoRoute(func(c *gin.Context) {
		if c.Request.Method == http.MethodGet &&
			!strings.ContainsRune(c.Request.URL.Path, '.') &&
			!strings.HasPrefix(c.Request.URL.Path, "/api/") {
			c.Request.URL.Path = "/"
			staticServer(c)
		}
	})

	apiGroup := r.Group("/api")
	{
		apiGroup.POST("/heartbeat", func(context *gin.Context) {
			context.JSON(http.StatusOK, gin.H{
				"status": "ok",
			})
		})

		apiGroup.GET("/ports", func(context *gin.Context) {
			ports := broker.GetPorts()
			context.JSON(http.StatusOK, ports)
		})

		apiGroup.GET("/filter", func(context *gin.Context) {
			context.JSON(http.StatusOK, broker.GetFilter())
		})

		apiGroup.PUT("/filter", func(context *gin.Context) {
			var filters broker.Filters
			if err := context.BindJSON(&filters); err != nil {
				context.JSON(400, gin.H{
					"error": "failed to parse body",
				})
			}
			broker.UpdateFilter(filters)
		})

		apiGroup.POST("/measure", func(context *gin.Context) {

		})

		apiGroup.POST("/recording/start", func(context *gin.Context) {
			if nbox.StartRecording() {
				context.JSON(200, gin.H{
					"status": "ok",
				})
			} else {
				context.JSON(500, gin.H{
					"status": "failed",
				})
			}
		})

		apiGroup.POST("/recording/replay", func(context *gin.Context) {
			if nbox.ReplayTraffic() {
				context.JSON(200, gin.H{
					"status": "ok",
				})
			} else {
				context.JSON(500, gin.H{
					"status": "failed",
				})
			}
		})
	}

	return r
}

func main() {
	router := setupRouter()
	err := router.Run(":8000")
	if err != nil {
		fmt.Println(err)
		return
	}
}
