var fs = require('fs');
var dir = process.argv[2];
var filter = process.argv[3];

fs.readdir(dir, function filterFiles(err, fileList){
    if (err) return console.error(err);
    
    var list = fileList.toString('utf-8');
      var filteredList = list.split(',').filter(filterTypes);
    
    function filterTypes(file){
        if(file.includes('.')){
            var fileType = file.substr(file.lastIndexOf('.') + 1);
        
            if(fileType === filter) return true;
        }
        return false;
    }
    
    for(var fileName of filteredList){
        console.log(fileName);
    }
});

/*
  
  fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      
      files.forEach(function (file) {
        
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })


*/