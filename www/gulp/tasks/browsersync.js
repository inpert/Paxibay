//'use strict';

var config = require('../config');
var gulp = require('gulp');
var browsersync = require('browser-sync');

gulp.task('browsersync', function (cb) {
    return browsersync({
        server: {
            baseDir: './www/'
        }
    }, cb);
});
