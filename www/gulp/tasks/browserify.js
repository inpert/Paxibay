//'use strict';

var config = require('../config');
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
//var debug = require('gulp-debug');

gulp.task('browserify', function () {
    gulp.src(['public/main.js'])
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(concat('bundled.js'))
        .pipe(gulp.dest('./public/content/js'));
});


gulp.task('browserifyDist', function () {
    gulp.src(['app/js/main.js'])
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(concat('bundled.js'))
        .pipe(gulp.dest('./dist/js'));
});