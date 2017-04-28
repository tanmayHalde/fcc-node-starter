const http = require('http');
var bl = require('bl');
var url = process.argv[2];


http.get(url, function(res) {
    "use strict";  
    
    res.pipe(bl(function (err, data) { 
  
   if (err) {
     return console.error(err.message);
   }
  data = data.toString();
  console.log(data.length);
  console.log(data);
  }));
  
});

