/**
 * Program to print numbers passed as command line arguments
 */

var num = process.argv;
var sum = 0;

for(var i = 2, len = process.argv.length; i < len;  i++) {
    sum += Number(num[i]);
}

console.log(sum);