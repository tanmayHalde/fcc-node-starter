/**
 * Program that uses single asynchronous filesystem operation
 * to read a file and print the number of newlines to console.
 */
 
const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, 'utf8', function(err, fileContents){
    if (err) return console.error(err);
    
    let str = fileContents.toString();
    const totalLines = str.split('\n').length-1;
    
    console.log(totalLines);
});

