/**
 * Program that returns URL query in JSON.
 */
 
var express = require('express');
var port = process.argv[2];

var app = express();

app.get('/search', function(req, res){
  res.send(req.query);
});

app.listen(port);





