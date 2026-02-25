const http = require("http")

const server = http.createServer((request, response) => {
    
    if (request.method === "GET") {
        response.writeHead(200, {"content-type": "text/plain"})

        response.end("Hello from my basic node server")
    }

})

server.listen(3000, () => {
    console.log("Server running on localhost:3000")
})
