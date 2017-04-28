const http = require('http');
var url = process.argv[2];

http.get(url, function(res) {
    "use strict";  
    
    // const statusCode = res;
    // let error;

    // if (statusCode === 200) {
    //   error = new Error(`Request Failed.\n` + `Status Code: ${statusCode}`);
    // }
    
    // if (error) {
    //   console.error(error.message);
    //   // consume response data to free up memory
    //   res.resume();
    //   return;
    // }
    
    res.setEncoding('utf8');
    
    res.on('error', console.error);
    
    res.on('data', function(chunk) {
      console.log(chunk);
  });
});
