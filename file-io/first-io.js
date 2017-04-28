var fs = require('fs');

var fileBuffer = fs.readFileSync(process.argv[2]);

var str = fileBuffer.toString();
var totalLines = str.split('\n').length-1;

console.log(totalLines);