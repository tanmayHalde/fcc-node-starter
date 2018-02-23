/**
 * Program that responds with SHA value of current date
 * to the incoming PUT requests.
 */
 
var express = require('express');
var crypto = require('crypto');
var port = process.argv[2];

var app = express();

app.put('/message/:id', function(req, res){
  res.send(crypto.createHash('sha1')
    .update(new Date().toDateString() + req.params.id)
    .digest('hex'));
});

app.listen(port);





