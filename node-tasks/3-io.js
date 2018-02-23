/**
 * Program that uses a single synchronous filesystem operation
 * to read a file and prints the number of newlines to console.
 */
 
const fs = require('fs');

const inputFile = process.argv[2];
const fileBuffer = fs.readFileSync(inputFile);
const str = fileBuffer.toString();
const totalLines = str.split('\n').length-1;

console.log(totalLines);