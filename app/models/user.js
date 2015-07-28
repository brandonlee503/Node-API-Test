// user.js

// Grab required things
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create schema for user
var userSchema = new Schema({
    name: String
});

// Export for outside use
module.exports = mongoose.model('User', userSchema);
