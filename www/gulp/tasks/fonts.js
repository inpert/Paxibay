//'use strict';

//var config = require('../config');
var gulp = require('gulp');
var connect = require('gulp-connect');
var bower = require('gulp-bower');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');
var sass = require('gulp-ruby-sass');

var config = {
    contentPath: './public/content',
    sassPath: './public/styles',
    cssPath: './public/build',
    bowerDir: './public/bower_lib',
    angularPath: './public/modules'
};

gulp.task('bower', function () {
    bower().pipe(gulp.dest(config.bowerDir));
});

gulp.task('icons', function () {
    gulp.src(config.bowerDir + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest('./public/fonts'));
});

gulp.task('css', function () {
    sass(config.sassPath + './main.scss',
        {
            style: 'nested',
            sourcemap: true,
            loadPath: [
                config.sassPath,
                config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
                config.bowerDir + '/fontawesome/scss']
        })
        .on("error", notify.onError(function (error) {
            return "Error: " + error.message;
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.cssPath));
});