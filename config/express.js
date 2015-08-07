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

module.exports = function (db) {
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

    app.get("/", function (req, res) {
        res.render("index");
    })

    _.each(routes, function (route) {
        if (route.apiType === 'put') {
            app.put(route.path, route.fn);
        } if (route.apiType === 'get') {
            app.get(route.path, route.fn);
        } else {
            app.post(route.path, route.fn);
        }
    });

    app.set('view engine', 'vash');
    app.set('views', './app/views');
    app.use(express.static(path.resolve('./www/public')));

    return app;
};
