/**
 * Program that reads file and replies in parsed JSON format.  
 */
 
var fs = require('fs');
var express = require('express');

var port = process.argv[2];
var filepath = process.argv[3];

var app = express();
app.get('/books', function(req, res){
    fs.readFile(filepath, function(err, data) {
        if(err) return res.send(err);
        
        res.json(JSON.parse(data));
    });
});

app.listen(port);