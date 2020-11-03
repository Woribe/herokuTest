const { response } = require('express')
let http = require('http')

let port = process.env.PORT || 8080

http.createServer(function(req, res) {
    res.writeHead(200)
    res.write('Hello world')
    res.end()
}).listen(port)