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
	gin.SetMode(gin.ReleaseMode) // delete this line to enable debug output
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
			data, err := context.GetRawData()
			if err != nil {
				context.JSON(http.StatusBadRequest, gin.H{
					"status":  "failed",
					"message": err,
				})
				return
			}
			utils.UpdateFilter(data)
			context.JSON(http.StatusOK, gin.H{
				"status": "ok",
			})
		})

		apiGroup.POST("/measure", func(context *gin.Context) {
			context.JSON(200, utils.GetStats())
		})

		apiGroup.POST("/recording/start", func(context *gin.Context) {
			var options utils.RecordingOptions
			if err := context.ShouldBindJSON(&options); err != nil {
				context.JSON(http.StatusBadRequest, gin.H{
					"status":  "failed",
					"message": err.Error(),
				})
				return
			}
			if pid, err := utils.StartRecording(options); err == nil {
				context.JSON(http.StatusOK, gin.H{
					"status":  "ok",
					"message": pid,
				})
			} else {
				context.JSON(http.StatusInternalServerError, gin.H{
					"status":  "failed",
					"message": err.Error(),
				})
			}
		})

		apiGroup.POST("/recording/:pid/stop", func(context *gin.Context) {
			pid := context.Param("pid")
			if err := utils.StopRecording(pid); err == nil {
				context.JSON(http.StatusOK, gin.H{
					"status":  "ok",
					"message": "success",
				})
			} else {
				context.JSON(http.StatusInternalServerError, gin.H{
					"status":  "failed",
					"message": err.Error(),
				})
			}
		})

		apiGroup.GET("/recording/:pid/running", func(context *gin.Context) {
			pid := context.Param("pid")
			if output, err := utils.IsRecordingRunning(pid); err == nil {
				context.JSON(http.StatusOK, gin.H{
					"status":  "ok",
					"message": output,
				})
			} else {
				context.JSON(http.StatusInternalServerError, gin.H{
					"status":  "failed",
					"message": err.Error(),
				})
			}
		})

		apiGroup.POST("/recording/replay", func(context *gin.Context) {
			if output, err := utils.ReplayTraffic(); err == nil {
				context.JSON(http.StatusOK, gin.H{
					"status":  "ok",
					"message": output,
				})
			} else {
				context.JSON(http.StatusInternalServerError, gin.H{
					"status":  "failed",
					"message": err.Error(),
				})
			}
		})

		apiGroup.GET("/recording/list", func(context *gin.Context) {
			list, err := utils.ListRecordings()
			if err != nil {
				context.JSON(http.StatusInternalServerError, gin.H{
					"status":  "failed",
					"message": err.Error(),
				})
				return
			}
			context.JSON(http.StatusOK, list)
		})

		apiGroup.GET("/recording/download/:name", func(context *gin.Context) {
			filename, err := utils.DownloadRecordingOutput(context.Param("name"))
			if err != nil {
				context.JSON(http.StatusInternalServerError, gin.H{
					"status":  "failed",
					"message": err.Error(),
				})
				return
			}
			context.Header("Content-Description", "File Transfer")
			context.Header("Content-Transfer-Encoding", "binary")
			context.Header("Content-Disposition", "attachment; filename=download.pcap")
			context.Header("Content-Type", "application/vnd.tcpdump.pcap")
			context.File(filename)
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
