//'use strict';

var config = require('../config');
var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function () {
    connect.server({
        root: '/',
        port: 8888
    });
});
gulp.task('connectDist', function () {
    connect.server({
        root: 'dist/',
        port: 9999
    });
});