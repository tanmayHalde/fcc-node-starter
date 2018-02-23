/**
 * Program that prints a list of files in a given 
 * directory, filtered by the extension of the files.
 */
 
const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(dir, function(err, files) {
  if (err) return console.error(err);
  
  files.forEach(function(file) {
    if(path.extname(file) === ext){
      console.log(file);
    }
  });
});