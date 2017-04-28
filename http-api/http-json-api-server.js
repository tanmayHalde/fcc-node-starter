var http = require('http');
var url = require('url');

var port = Number(process.argv[2]);

//function to set parsetime res
function getIsoTime (time) {
    return {
        "hour": time.getHours(),
        "minute": time.getMinutes(),
        "second": time.getSeconds()
    };
}

// function to set unixtime res
function getUnixTime (time) {
    return {
        "unixtime": time.getTime()
    };
}

//Initialize server
var server = http.createServer(function (req, res){
    var reqUrl = url.parse(req.url, true);
    var time = new Date(reqUrl.query.iso);  //wth is this ?
    var result;
    
    // determine the url- regex or using url.search ?
    if (/^\/api\/parsetime/.test(req.url)) {
        result = getIsoTime(time);
    }
    else if (/^\/api\/unixtime/.test(req.url)) {
        result = getUnixTime(time);
    }
    
    if (result) {
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify(result));
    }
    else {
         res.writeHead(404);
        res.end();
    }
});

server.listen(port);
