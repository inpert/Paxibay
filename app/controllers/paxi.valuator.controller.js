'use strict';

var Valuator = require('mongoose').model('Valuator');

// Create a new 'read' controller method
exports.read = function (req, res) {
    // Use the 'response' object to send a JSON response
    res.json(req.valuator);
};

// Create a new 'create' controller method
exports.create = function (req, res) {
    // Create a new instance of the 'Valuator' Mongoose model
    var valuator = new Valuator();

    // Use the 'Valuator' instance's 'save' method to save a new valuator document 
    valuator.save(function (err, valuator) {
        if (err) {
            // Call the next middleware with an error message
            //return next(err);
            console.error(err);
        } else {
            // Use the 'response' object to send a JSON response
            console.log(valuator);
            res.json(valuator);
        }
    });
};

// Create a new 'list' controller method
exports.list = function (req, res, next) {
    // Use the 'User' static 'find' method to retrieve the list of users
    Valuator.find({}, function (err, valuators) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            res.json(valuators);
        }
    });
};

// Create a new 'delete' controller method
exports.delete = function (req, res, next) {
    // Use the 'User' instance's 'remove' method to save a new user document
    req.valuator.remove(function (err) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            res.json(req.valuator);
        }
    })
};

// Create a new 'update' controller method
exports.update = function (req, res, next) {
    // Use the 'User' static 'findByIdAndUpdate' method to update a specific user
    Valuator.findByIdAndUpdate(req.valuator.id, req.body, function (err, valuator) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            res.json(valuator);
        }
    })
};

// Create a new 'userByID' controller method
exports.valuatorByID = function (req, res, next, id) {
    // Use the 'User' static 'findOne' method to retrieve a specific user
    Valuator.findOne({
        _id: id
    }, function (err, valuator) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Set the 'req.user' property
            req.valuator = valuator;

            // Call the next middleware
            next();
        }
    });
};
