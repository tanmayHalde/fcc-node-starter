/**
 * Program that replies to tcp requests with current time.
 */

const net = require('net');
const port = Number(process.argv[2]);

var server = net.createServer(function (socket){
    socket.end(printDate() + '\n');
});

server.listen(port);

function printDate () {
    var date = new Date();
    
    return new Date().getFullYear() + '-'
        + padZero(date.getMonth() + 1) + '-'     // starts at 0  
        + padZero(date.getDate()) + ' '     // returns the day of month  
        + padZero(date.getHours()) + ':' 
        + padZero(date.getMinutes());
}

function padZero (val) {
  return (val < 10 ? '0' : '') + val;
}