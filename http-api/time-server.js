var net = require('net');
var port = Number(process.argv[2]);

function padZero (val) {
  return (val < 10 ? '0' : '') + val;
}

function printDate () {
    var date = new Date();
    
    return date.getFullYear() + '-'
        + padZero(date.getMonth() + 1) + '-'     // starts at 0  
        + padZero(date.getDate()) + ' '     // returns the day of month  
        + padZero(date.getHours()) + ':' 
        + padZero(date.getMinutes()) ;
}

var server = net.createServer(function (socket){
    socket.end(printDate() + '\n');
});

server.listen(port);
