
var mongoose = require('mongoose'),
    settings = require('./dependancy/paxi.valuator.dependancy.settings.model'),
    projects = require('./dependancy/paxi.valuator.dependancy.projects.model'),
    taxing = require('./dependancy/paxi.valuator.dependancy.taxing.model'),
    costing = require('./dependancy/paxi.valuator.dependancy.costing.model')
    investing = require('./dependancy/paxi.valuator.dependancy.investing.model'),
    lending = require('./dependancy/paxi.valuator.dependancy.lending.model'),
    depreciation = require('./dependancy/paxi.valuator.dependancy.depreciation.model');

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
