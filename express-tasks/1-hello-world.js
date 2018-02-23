/**
 * Program that displays Hello World using express.js
 */
 
var express = require('express');
var app = express();
var port = process.argv[2];

app.get('/home', function(req, res) {
  res.end('Hello World!')
});

app.listen(port);