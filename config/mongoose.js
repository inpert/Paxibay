// Invoke 'strict' JavaScript mode
//'use strict';
// reference init.js

// Load the module dependencies
var config = require('./config'),
	mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function () {
    // Use Mongoose to connect to MongoDB
    var db = mongoose.connect(config.db.uri);

    // define connection
    var db = mongoose.connection;
    db.on('error', console.error);
    db.once('open', function callback() {
        console.log('mongodb connection opened.sssss');
    });

    // Load the models
    //require('../app/entities/paxi.user.model');
    //require('../app/entities/paxi.identiy.model');
    require('../app/entities/paxi.valuator.model');

    // Return the Mongoose connection instance
    return db;
};