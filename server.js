// server.js

// Import packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Import models
var user = require('.app/models/user');

// Connect to a local Mongo database
mongoose.connect('mongodb://localhost/usersTest');


// Configure app to use bodyParser() - allows us to get data from POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Set our port
var port = process.env.PORT || 8080;


// Routes for API
// ---------
// Get instance of express router
var router = express.Router();


// Test
router.get('/', function(req, res) {
    res.json({message: "Hello World"});
});

// Add additional routes here

// Register routes - all routes will be prefixed with /api
// --------
app.use('/api', router);



// Start server
// --------
app.listen(port);
console.log("Server has started on port " + port);

