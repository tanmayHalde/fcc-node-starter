/**
 * Module that searches files with specific extension
 */
 
var fs = require('fs');
var path = require('path');

module.exports.searchFiles = function (dir, ext, cb){
  fs.readdir(dir, function(err, files) {
      if (err) return cb(err);
      
      ext = "." + ext;
      files = files.filter(function(val){
         return path.extname(val) === ext;
      });
      
      cb(err, files);
    })
};