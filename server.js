// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

// survey list
var stmnt = [];
stmnt[0] = 'I like sci-fi movies';
stmnt[1] = 'I like playing sports';
stmnt[2] = 'I like watching sports';
stmnt[3] = 'I like eating out';
stmnt[4] = 'I like staying home';
stmnt[5] = 'I like this class',
stmnt[6] = 'I hate this class';
stmnt[7] = 'I like music';
stmnt[8] = 'I miss Jeremiah';
stmnt[9] = 'I like this survey';

// Create express app instance.
var app = express();
var PORT = process.env.PORT || 9002;
// public directory path
app.use(express.static(path.join(__dirname, './app/public')))

// parsers
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Initiate the listener.
app.listen(PORT, function(){
  console.log("app listening on port: " + PORT);
});
