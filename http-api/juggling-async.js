const http = require('http');
var bl = require('bl');

var output = [];
var count = 0;

var httpGet = function (url, index) {
     http.get(url, function(res) {
        res.pipe(bl(function (err, data) { 
            if (err) {
                return console.error(err);
            }
            output[index] = data.toString();
            count++;
            
             //dont print output till 3rd url res stored in 
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

for (var i=0; i<3; i++){
    //store response in array
    httpGet( process.argv[2+i], i ); 
}


