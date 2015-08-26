//module.exports = {
//    "valuator": "00000000",
//    "user_id": "",
//    "metadata": {
//        "01_settings": {},
//        "02_projects": {},
//        "03_taxing": {},
//        "04_costing": {},
//        "05_investing": {},
//        "06_lending": {},
//        "07_depreciation": {}
//    }
//}

// paxi.valuator.settings.model
// paxi.valuator.projects.model
// paxi.valuator.taxing.model
// paxi.valuator.costing.model
// paxi.valuator.investing.model
// paxi.valuator.lending.model
// paxi.valuator.depreciation.model

var mongoose = require('mongoose'),
    settings = require('./paxi.valuator.settings.model'),
    projects = require('./paxi.valuator.projects.model'),
    taxing = require('./paxi.valuator.taxing.model'),
    costing = require('./paxi.valuator.costing.model'),
    investing = require('./paxi.valuator.investing.model'),
    lending = require('./paxi.valuator.lending.model'),
    depreciation = require('./paxi.valuator.depreciation.model');


var metadata = {
    settings: {},
    projects: {},
    taxing: {},
    costing: {},
    investing: {},
    lending: {},
    depreciation: {}
};

var valuatorSchema = mongoose.Schema({
    valuator: String,
    user_id: String,
    metadata: metadata
});

var paxiValuator = mongoose.model('paxiValuator', valuatorSchema);

