var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function postRead(err, fileContents){
    if (err) return console.error(err);
    
    var str = fileContents.toString('utf-8');
    var totalLines = str.split('\n').length-1;
    console.log(totalLines);
});

