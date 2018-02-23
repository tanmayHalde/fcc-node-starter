/**
 * Program to create a http server that replies with
 * a text file to all requests
 */
 
const http = require('http');
const fs = require('fs');

const port = Number(process.argv[2]);
const file = process.argv[3];

var server = http.createServer(function (req, res){
    res.writeHead(200, { 'content-type': 'text/plain'});
    fs.createReadStream(file).pipe(res);
});

server.listen(port);
