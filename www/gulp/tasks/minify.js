//'use strict';

var config = require('../config');
var gulp = require('gulp');
var connect = require('gulp-connect');
var bower = require('gulp-bower');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var autoprefix = require('gulp-autoprefixer');

gulp.task('minify-css', function () {
    var opts = { comments: true, spare: true };
    gulp.src(['./app/**/*.css', '!./app/bower_components/**'])
        .pipe(minifyCSS(opts))
        .pipe(gulp.dest('./dist/'));
});
gulp.task('minify-js', function () {
    gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
        .pipe(uglify({
            // inSourceMap:
            // outSourceMap: "app.js.map"

        }))
        .pipe(gulp.dest('./dist/'));
});


// JS concat, strip debugging and minify
gulp.task('scripts', function () {
    gulp.src(['./public/bower_lib/angular/angular.js', './public/app.js', './public/modules/**/*.js'])
      .pipe(concat('script.js'))
      .pipe(stripDebug())
      .pipe(uglify())
      .pipe(gulp.dest('./public/build/scripts'));
});

//// CSS concat, auto-prefix and minify
//gulp.task('styles', function () {
//    gulp.src(['./src/styles/*.css'])
//      .pipe(concat('styles.css'))
//      .pipe(autoprefix('last 2 versions'))
//      .pipe(minifyCSS())
//      .pipe(gulp.dest('./build/styles/'));
//});



//==================================
//// minify new images
//gulp.task('imagemin', function () {
//    var imgSrc = './src/images/**/*',
//        imgDst = './build/images';

//    gulp.src(imgSrc)
//      .pipe(changed(imgDst))
//      .pipe(imagemin())
//      .pipe(gulp.dest(imgDst));
//});

//// minify new or changed HTML pages
//gulp.task('htmlpage', function () {
//    var htmlSrc = './src/*.html',
//        htmlDst = './build';

//    gulp.src(htmlSrc)
//      .pipe(changed(htmlDst))
//      .pipe(minifyHTML())
//      .pipe(gulp.dest(htmlDst));
//});
