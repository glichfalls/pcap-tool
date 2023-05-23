# Development

Edit Filter Criteria of ixia vision e100 via REST API and start / stop recording of traffic on a nbox with n2disk. 

- Backend is written in go with the gin web framework
- Frontend is a nuxt 3 app (vue)

To build the output, just run `./build.sh`

to run the tool: `./main`

the application runs on port 8000 (http://localhost:8000)

you have to restart the server if you changed the config

for distribution, only the `tool` directory (main and config) is needed