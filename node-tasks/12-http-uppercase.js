/**
 * Program that accepts HTTP POST requests and replies
 * with incoming body characters to upper-case.
 * 
 */

const http = require('http');
const map = require('through2-map');
const port = Number(process.argv[2]);

var server = http.createServer(function (req, res){
    if (req.method !== 'POST') {
        return res.end('Error: POST method expected');
    }
    
    req.pipe(map(function (data) {
        return data.toString().toUpperCase();
    })).pipe(res);
    
});

server.listen(port);