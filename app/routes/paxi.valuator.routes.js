'use strict';

// Load the 'valuator' controller
var valuators = require('../../app/controllers/paxi.valuator.controller');

// Define the routes module' method
module.exports = function (app) {
    // Set up the 'users' base routes 
    //app.route('/api/valuator')
    //    .post(valuators.create)
    //    .get(valuators.list);

    app.route('/api/valuators')
        .post(valuators.create)
        .get(valuators.list);

    // Set up the 'users' parameterized routes
    app.route('/api/valuators/:id')
        .get(valuators.read)
        .put(valuators.update);

    // Set up the 'userId' parameter middleware
    app.param('id', valuators.valuatorByID);
};