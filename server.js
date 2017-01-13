//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
require('./app/data/routing/api-routes.js')(app);
require('./app/data/routing/html-routes.js')(app);

//connect to server
var app = express();
var PORT = 3000;
var root = __dirname;

//Express to handle data-parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});