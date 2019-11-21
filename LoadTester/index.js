const express = require('express');


var app = express();

const loadtest = require('loadtest');
    const options = {
    url: 'http://ec2-18-216-104-199.us-east-2.compute.amazonaws.com:3000/stress',
    concurrency: 1000,
    maxRequests: 80000000,

};

app.get('/estressApp', function (req, res) {
    
    loadtest.loadTest(options, function(error, result){
        if (error)
        {
            return console.error('Got an error: %s', error);
        }
        res.send('Tests run successfully');
    });

});

app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
  });
  