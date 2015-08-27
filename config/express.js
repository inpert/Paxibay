var _ = require('underscore'),
    fs = require('fs'),
	http = require('http'),
	https = require('https'),
	express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	//session = require('express-session'),
	//compression = require('compression'),
	methodOverride = require('method-override'),
	//cookieParser = require('cookie-parser'),
	//config = require('./config');
	path = require('path');

var routes = require('../app/routes.js');
var employeeController = require("../app/controllers/employeeController.js");
var projectData = require('../app/models/pbprojectFake');

module.exports = function (db) {

    //db.on('error', console.error);
    //db.once('open', function callback() {
    //    console.log('mongodb connection opened.');
    //});

    var app = express();

    //// Setting application local variables
    //app.locals.title = config.app.title;
    //app.locals.description = config.app.description;
    //app.locals.keywords = config.app.keywords;
    //app.locals.facebookAppId = config.facebook.clientID;
    //app.locals.jsFiles = config.getJavaScriptAssets();
    //app.locals.cssFiles = config.getCSSAssets();

    // configuration ==========================================
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ 'extended': 'true' }));
    app.use(bodyParser.json());
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
    app.use(methodOverride());

    _.each(routes, function (route) {
        if (route.apiType === 'put') {
            app.put(route.path, route.fn);
        } if (route.apiType === 'get') {
            app.get(route.path, route.fn);
        } else {
            app.post(route.path, route.fn);
        }
    });

    app.get('/api/project/', function (req, res) {
        setTimeout(function () {
            res.send(projectData);
        }, 1000);
    });

    app.post('/api/project/:id', function (req, res) {
        setTimeout(function () {
            res.send(projectData);
        }, 2000);
    });

    app.put('/api/project/:id', function (req, res) {
        setTimeout(function () {
            res.send(projectData);
        }, 1000);
    });


    app.set('view engine', 'vash');
    app.set('views', './app/views');


    // Load the routing files
    require('../app/routes/paxi.valuator.routes.js')(app);


    app.use(express.static(path.resolve('./www/public')));

    //employeeController.init(app);
    
    return app;
};
