/**
 * Program that performs a http GET request to a URL
 */
 
const http = require('http');

const url = process.argv[2];

http.get(url, function(res) {
    res.setEncoding('utf8');
    res.on('error', console.error);
    res.on('data', function(data) {
      console.log(data);
  });
});
