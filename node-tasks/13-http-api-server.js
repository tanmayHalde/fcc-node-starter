/**
 * Program that accepts time in GET request and replies
 * with JSON containing only hours, min and secs.
 */
 
const http = require('http');
const url = require('url');

const port = Number(process.argv[2]);

function getIsoTime(time) {
    return {
        "hour": time.getHours(),
        "minute": time.getMinutes(),
        "second": time.getSeconds()
    };
}

function getUnixTime(time) {
    return {
        "unixtime": time.getTime()
    };
}

function getResponse(req){
    const urlObj = url.parse(req.url, true);
    const time = new Date(urlObj.query.iso);
    
    const isoTimeRegex = /^\/api\/parsetime/;
    const unixTimeRegex = /^\/api\/unixtime/;
    let result;
    
    // determine the time format requested 
    if (isoTimeRegex.test(req.url)) {
        result = getIsoTime(time);
    } else if (unixTimeRegex.test(req.url)) {
        result = getUnixTime(time);
    }
    
    return result;
}


var server = http.createServer(function (req, res){
    var reponse = getResponse(req);
    
    if (reponse) {
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify(reponse));
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(port);


