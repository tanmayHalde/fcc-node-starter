/**
 * Program that processes a HTML form input 
 */
 
var express = require('express');
var bodyparser = require('body-parser')

var port = process.argv[2];
var filepath = process.argv[3];

var app = express();
app.use(bodyparser.urlencoded({extended: false}));
app.post("/form", function(req, res) {
  res.send(req.body.str.split('').reverse().join(''));
  res.end();
});

app.listen(port);


