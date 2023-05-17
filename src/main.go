package main

import (
	"embed"
	"fmt"
	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	"main/utils"
	"net/http"
	"strings"
	"time"
)

//go:embed public/*
var frontend embed.FS

func setupRouter() *gin.Engine {

	// setup router
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()

	// allow CORS
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"OPTIONS", "GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"*"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	// embed frontend build in executable
	dist := utils.EmbedFolder(frontend, "public")
	staticServer := static.Serve("/", dist)
	router.Use(staticServer)

	// re-route all requests not starting with /api to the frontend
	router.NoRoute(func(c *gin.Context) {
		if c.Request.Method == http.MethodGet &&
			!strings.ContainsRune(c.Request.URL.Path, '.') &&
			!strings.HasPrefix(c.Request.URL.Path, "/api/") {
			c.Request.URL.Path = "/"
			staticServer(c)
		}
	})

	// api routes
	apiGroup := router.Group("/api")
	{
		apiGroup.POST("/heartbeat", func(context *gin.Context) {
			context.JSON(http.StatusOK, gin.H{
				"status": "ok",
			})
		})

		apiGroup.GET("/ports", func(context *gin.Context) {
			ports := utils.GetPorts()
			context.JSON(http.StatusOK, ports)
		})

		apiGroup.GET("/filter", func(context *gin.Context) {
			context.JSON(http.StatusOK, utils.GetFilter())
		})

		apiGroup.PUT("/filter", func(context *gin.Context) {
			var filters utils.Filters
			if err := context.BindJSON(&filters); err != nil {
				context.JSON(400, gin.H{
					"error": "failed to parse body",
				})
			}
			utils.UpdateFilter(filters)
		})

		apiGroup.POST("/measure", func(context *gin.Context) {
			context.JSON(200, utils.GetStats())
		})

		apiGroup.POST("/recording/start", func(context *gin.Context) {
			if utils.StartRecording() {
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
			if utils.ReplayTraffic() {
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
