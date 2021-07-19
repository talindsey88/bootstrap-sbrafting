var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
  });
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app.use(express.bodyParser());

app.post('/home.html', function(req, res) {
     console.log(req.body);
  //this needs to be turned into a get that returns images
});

app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});
