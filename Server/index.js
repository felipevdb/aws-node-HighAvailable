const express = require('express'),
    http = require('http');
    path = require('path');
    AWS = require('aws-sdk');


var app = express()

app.get('/', function (req, res) {

  res.sendFile(path.join(__dirname, 'client', 'index.html'))
})


app.get('/getMachineId', function (req, res){
    var meta  = new AWS.MetadataService();

    meta.request("/latest/meta-data/instance-id", function(err, machineId){
        res.send(machineId);
    });

    
}),

app.get('/stress', function (req, res){
    
  var i = 0;
  while(i != 1000000)
  {
    i++
  }

}),




app.listen(3000, function () {
  console.log('Example app listening on port 8000!')
});




//MetadataService