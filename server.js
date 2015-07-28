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


// ROUTES FOR API
// -------------------------------------------------------------------
// Get instance of express router
var router = express.Router();


// Test
router.get('/', function(req, res) {
    res.json({message: "Hello World"});
});

// Additonal routes

// REGISTER ROUTES 
// -------------------------------------------------------------------
// All routes will be prefixed with /api

app.use('/api', router);



// START SERVER
// -------------------------------------------------------------------
app.listen(port);
console.log("Server has started on port " + port);

