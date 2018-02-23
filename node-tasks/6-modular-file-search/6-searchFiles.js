/**
 * Program for modular file search
 */
 
var mymodule = require('./search-dir.js');

var dir = process.argv[2];
var ext = process.argv[3];

mymodule.searchFiles(dir, ext, cb);

function cb(err, data){
  if(err) return console.error(err);
  
  printFiles(data);
}

function printFiles(files){
    if(files == null) return console.error("NO FILES FOUND");
   
    files.forEach(function (file) {
      console.log(file);
    })
}
