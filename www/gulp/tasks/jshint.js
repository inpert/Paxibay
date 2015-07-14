//'use strict';

var config = require('../config');
var gulp   = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function () {
    // './gulp/**/*.js', 
    gulp.src(['./public/**/*.js', '!./public/_lib/**', '!./public/content/**'])
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(jshint.reporter('fail'));
});


