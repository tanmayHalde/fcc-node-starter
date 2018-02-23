/**
 * Program that send HTTP GET request and streams and
 * collects response data and prints to console.
 */

const http = require('http');
const bl = require('bl');

var url = process.argv[2];

http.get(url, function(res) {
    res.pipe(bl(function (err, data) { 
    
        if (err) return console.error(err.message);
   
        data = data.toString();
    
        console.log(data.length);
        console.log(data);
     }));
});

