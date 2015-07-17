//'use strict';

var config = require('../config');
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
//var debug = require('gulp-debug');

gulp.task('browserify', function () {
    //gulp.src(['public/main.js', 'public/js/main.js'])
    gulp.src(['public/app.js'])
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./public/build'));
});


gulp.task('browserifyDist', function () {
    gulp.src(['public/main.js'])
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist/js'));
});