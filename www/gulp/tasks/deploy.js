//'use strict';

var config = require('../config');
var gulp = require('gulp');

gulp.task('copy-bower-components', function () {
    gulp.src('./app/bower_components/**')
      .pipe(gulp.dest('dist/bower_components'));
});
gulp.task('copy-html-files', function () {
    gulp.src('./app/**/*.html')
      .pipe(gulp.dest('dist/'));
});
