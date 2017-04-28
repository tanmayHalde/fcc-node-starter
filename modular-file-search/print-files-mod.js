var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, cb){

  fs.readdir(dir, function filterFiles(err, fileList) {
      if (err) return cb(err);
      
      ext = "." + ext;  // path.extname return . also i.e .txt not txt
    
      // need to pass filtered args to cb
      fileList = fileList.filter(function(val){
         return path.extname(val) === ext;
      });
      
      cb(err, fileList);
    })
}

//module.exports.getFiles = getFiles;