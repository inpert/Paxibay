//'use strict';

var config = require('../config');
var gulp   = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function () {
    var source = ['./gulp/**/*.js', './public/config/*.js', './public/**/*.js', '!./public/bower_lib/**', '!./public/build/**'];
    gulp.src(source)
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(jshint.reporter('fail'));
});
