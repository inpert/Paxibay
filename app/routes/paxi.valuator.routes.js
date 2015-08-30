'use strict';

// Load the 'valuator' controller
var valuators = require('../../app/controllers/paxi.valuator.controller');

// Define the routes module' method
module.exports = function (app) {
    // Set up the 'valuators' base routes 
    app.route('/api/valuators')
        .post(valuators.create)
        .get(valuators.list);

    // Set up the 'valuators' parameterized routes
    app.route('/api/valuators/:id')
        .get(valuators.read)
        .put(valuators.update)
        .delete(valuators.delete);

    // Set up the 'valuatorId' parameter middleware
    app.param('id', valuators.valuatorByID);
};