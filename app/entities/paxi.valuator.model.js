
var mongoose = require('mongoose'),
    settings    = require('./paxi.valuator.dependancy.settings.model'),
    projects    = require('./paxi.valuator.dependancy.projects.model'),
    taxing      = require('./paxi.valuator.dependancy.taxing.model'),
    costing     = require('./paxi.valuator.dependancy.costing.model')
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

var ValuatorSchema = mongoose.Schema({
    user_id: String,
    metadata: metadata
});

mongoose.model('Valuator', ValuatorSchema);
