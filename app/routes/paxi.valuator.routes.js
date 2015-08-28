'use strict';

// Load the 'valuator' controller
var valuator = require('../../app/controllers/paxi.valuator.controller');

// Define the routes module' method
module.exports = function (app) {
    // Set up the 'users' base routes 
    app.route('/api/valuator')
        .post(valuator.createValuator);

    //// Set up the 'users' parameterized routes
    //app.route('/users/:userId')
	//   .get(users.read)
	//   .put(users.update)
	//   .delete(users.delete);

    //// Set up the 'userId' parameter middleware
    //app.param('userId', users.userByID);
};