//'use strict';

var angular = require('angular');
var bulk = require('bulk-require');

module.exports = angular.module('app.controllers', []);

//var modules = bulk(basedir, globs, opts={})
bulk(__dirname, ['./**/!(*_index|*.spec).js']);