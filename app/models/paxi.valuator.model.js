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


var mongoose    = require('mongoose'),
    settings    = require('./paxi.valuator.dependancy.settings.model'),
    projects    = require('./paxi.valuator.dependancy.projects.model'),
    taxing      = require('./paxi.valuator.dependancy.taxing.model'),
    costing     = require('./paxi.valuator.dependancy.costing.model'),
    investing   = require('./paxi.valuator.dependancy.investing.model'),
    lending     = require('./paxi.valuator.dependancy.lending.model'),
    depreciation = require('./paxi.valuator.dependancy.depreciation.model');

var metadata = {
    settings: settings,
    projects: projects,
    taxing: taxing,
    costing: costing,
    investing: investing,
    lending: lending,
    depreciation: depreciation
};

var valuatorSchema = mongoose.Schema({
    valuator: String,
    user_id: String,
    metadata: metadata
});

mongoose.model('paxiValuator', valuatorSchema);
//var paxiValuator = mongoose.model('paxiValuator', valuatorSchema);


