/**
 * Program that sends URL requests and collects
 * and prints response in the order they were sent.
 */
 
const http = require('http');
const bl = require('bl');

var output = [];
var count = 0;

for (var i=0; i<3; i++){
    sendRequest(process.argv[i+2], i); 
}

function sendRequest(url, index) {
    http.get(url, function(res) {
        res.pipe(bl(function (err, data) { 
        if (err)    return console.error(err);
        
        output[index] = data.toString();
        count++;
        
         // print after 3rd url response is stored
         if (count === 3){
             printData();
         }
        }));
    });
};

function printData(){
    for (var val=0; val<3; val++){
        console.log(output[val]);
    }
}




