/**
 * Program that renders jade file and send it as response 
 */
 
var express = require('express');
var path = require('path');

var port = process.argv[2];
var filepath = process.argv[3];

var app = express();
app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'jade');

app.get("/home", function(request, response) {
  response.render(filepath, { date: new Date().toDateString() });
});
app.listen(port);



