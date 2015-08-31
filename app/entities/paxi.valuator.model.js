
var mongoose = require('mongoose'),
    settings = require('./dependancy/paxi.valuator.dependancy.settings.model'),
    blueprint = require('./dependancy/paxi.valuator.dependancy.blueprint.model'),
    taxing = require('./dependancy/paxi.valuator.dependancy.taxing.model'),
    costing = require('./dependancy/paxi.valuator.dependancy.costing.model')
    investing = require('./dependancy/paxi.valuator.dependancy.investing.model'),
    lending = require('./dependancy/paxi.valuator.dependancy.lending.model'),
    depreciation = require('./dependancy/paxi.valuator.dependancy.depreciation.model');

var metadata = {
    settings: settings,
    blueprint: blueprint,
    taxing: taxing,
    costing: costing,
    investing: investing,
    lending: lending,
    depreciation: depreciation
};

var reports = {};

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ValuatorSchema = Schema({
    user_id: {
        type: Number,
        ref: 'users',
        index: true,
        default: '100000'
    },
    metadata: metadata,
    reports: reports
});

mongoose.model('Valuator', ValuatorSchema);
