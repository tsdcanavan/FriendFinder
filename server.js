// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var html = require('./routing/htmlRoutes.js');

// Create express app instance.
var app = express();
var PORT = process.env.PORT || 9002;
// Routes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:oper", function(req, res) {
var operation = req.params.oper;

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "survey":
      // Add your logic here. Pun intended.
      result = ;
      break;
    default:
      // Handle anything that isn't specified
      result = '<h1>Home Mode</h1>'
  }

  // We return the result back to the user in the form of a string
  res.send(result);

});

// Initiate the listener.
app.listen(PORT, function(){
  console.log("app listening on port: " + PORT);
});
