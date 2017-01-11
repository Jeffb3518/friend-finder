var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;
var root = __dirname;

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});