var num = process.argv;
var sum=0;

//console.log(num)

for(var i=2; i<process.argv.length; i++){
    sum += Number(num[i]);
}

console.log(sum);