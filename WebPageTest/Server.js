var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var util = require('util');
var path = require('path');

var allowCrossDomain = function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);

//var urlencodedParser = bodyParser.urlencoded({ extended: false });   //optional
app.use("/public",  express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(require('./Routes'));

var server = app.listen(3031, function(){
    var port = server.address().port;
    console.log("Example app listening at http://localhost:%s", port)
});

