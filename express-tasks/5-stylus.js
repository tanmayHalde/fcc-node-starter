/**
 * Program that uses stylus to add style to HTML content. 
 */
 
var express = require('express');
var stylus = require('stylus');
var path = require('path'); 

var port = process.argv[2];
var filepath = process.argv[3];

var app = express();
app.use(stylus.middleware(__dirname + '/public'));
app.use(express.static(filepath || path.join(__dirname, 'public')));


app.listen(port);