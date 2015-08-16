//'use strict';

var config = require('../config');
var gulp = require('gulp');
var connect = require('gulp-connect');
// .use(require('connect-livereload')({ port: 35729 }))
var bower = require('gulp-bower');
var minifyCSS = require('gulp-minify-css');
var runSequence = require('run-sequence');
var browsersync = require('browser-sync');

// default gulp task
gulp.task('dev', ['jshint', 'css', 'browserify'], function () {

    // watch for JS changes
    gulp.watch('public/app.js', function () {
        runSequence('clean', 'browserify', browsersync.reload);
    });

    gulp.watch('public/modules/**/*.js', function () {
        runSequence('clean', 'browserify', browsersync.reload);
    });

    // watch for scss changes
    gulp.watch('public/styles/*.scss', function () {
        gulp.run('css');
    });

    //// watch for JS changes
    //gulp.watch(config.angularPath + '/**/*.js', function () {
    //    gulp.run('jshint');
    //});

    //// watch for HTML changes
    //gulp.watch('./src/*.html', function () {
    //    gulp.run('htmlpage');
    //});

    //// watch for JS changes
    //gulp.watch('./src/scripts/*.js', function () {
    //    gulp.run('jshint', 'scripts');
    //});

    //// watch for CSS changes
    //gulp.watch('./src/styles/*.css', function () {
    //    gulp.run('styles');
    //});

});

// build task 
gulp.task('build',
  ['lint', 'minify-css', 'browserifyDist', 'copy-html-files', 'copy-bower-components', 'connectDist']
);




// default gulp task
gulp.task('default_', ['bower', 'icons', 'css', 'jshint'], function () {
    // watch for scss changes
    gulp.watch(config.sassPath + '/**/*.scss', function () {
        gulp.run('css');
    });

    // watch for JS changes
    gulp.watch(config.angularPath + '/**/*.js', function () {
        gulp.run('jshint');
    });

    //// watch for HTML changes
    //gulp.watch('./src/*.html', function () {
    //    gulp.run('htmlpage');
    //});

    //// watch for JS changes
    //gulp.watch('./src/scripts/*.js', function () {
    //    gulp.run('jshint', 'scripts');
    //});

    //// watch for CSS changes
    //gulp.watch('./src/styles/*.css', function () {
    //    gulp.run('styles');
    //});

});
   
    