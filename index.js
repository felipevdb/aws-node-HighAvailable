const express = require('express'),
    http = require('http');
    path = require('path');
    AWS = require('aws-sdk');


var app = express()

app.get('/', function (req, res) {

  res.sendFile(path.join(__dirname, 'Client', 'index.html'))
})


app.get('/getMachineId', function (req, res){
    var meta  = new AWS.MetadataService();

    var machineId = meta.request("/latest/meta-data/instance-id", function(err, data){
        console.log(data);
    });

    res.send(machineId);
}),



app.listen(3000, function () {
  console.log('Example app listening on port 8000!')
});




//MetadataService