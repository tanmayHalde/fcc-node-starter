/**
 * Program that serves index.html without any routes.
 */
 
var express = require('express');
var path = require('path'); 

var port = process.argv[2];
var filepath = process.argv[3];

var app = express();
app.use(express.static(filepath || path.join(__dirname, 'public')));
app.listen(port);



