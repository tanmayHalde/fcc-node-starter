var http = require('http');
var map = require('through2-map');
var port = Number(process.argv[2]);

var server = http.createServer(function (req, res){
    
    if (req.method !== 'POST') {
        return res.end('Error: POST method expected');
    }
    
    req.pipe(map(function (data) {
        return data.toString().toUpperCase();
    })).pipe(res);
    
});

server.listen(port);

/* Review - rememeber to add post method check, i.e to ensure method is post */