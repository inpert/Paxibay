var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    notify = require('gulp-notify'),
    bower = require('gulp-bower'),
    sourcemaps = require('gulp-sourcemaps');


var config = {
    sassPath: './public/content/sass',
    bowerDir: './public/_lib'
};

gulp.task('bower', function () {
    bower().pipe(gulp.dest(config.bowerDir))
});


gulp.task('icons', function () {
    gulp.src(config.bowerDir + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest('./public/content/fonts'))
});

gulp.task('css', function () {
    sass(config.sassPath + './style.scss',
        {
            style: 'nested',
            sourcemap: true,
            loadPath: [
                config.sassPath,
                config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
                config.bowerDir + '/fontawesome/scss'
            ]
        })
        .on("error", notify.onError(function (error) {
            return "Error: " + error.message;
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/content/css'))
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch(config.sassPath + '/**/*.scss', ['css']);
});

gulp.task('default', ['bower', 'icons', 'css', 'watch']);

//// include gulp
//var gulp = require('gulp'); { sourcemap: true }

//// include plug-ins
//var jshint = require('gulp-jshint');
//var concat = require('gulp-concat');
//var stripDebug = require('gulp-strip-debug');
//var uglify = require('gulp-uglify');
//var changed = require('gulp-changed');
//var imagemin = require('gulp-imagemin');
//var minifyHTML = require('gulp-minify-html');
//var autoprefix = require('gulp-autoprefixer');
//var minifyCSS = require('gulp-minify-css');

//// JS hint task
//gulp.task('jshint', function () {
//    gulp.src('./src/scripts/*.js')
//      .pipe(jshint())
//      .pipe(jshint.reporter('default'));
//});
 
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

//// JS concat, strip debugging and minify
//gulp.task('scripts', function () {
//    gulp.src(['./src/scripts/lib.js', './src/scripts/*.js'])
//      .pipe(concat('script.js'))
//      .pipe(stripDebug())
//      .pipe(uglify())
//      .pipe(gulp.dest('./build/scripts/'));
//});

//// CSS concat, auto-prefix and minify
//gulp.task('styles', function () {
//    gulp.src(['./src/styles/*.css'])
//      .pipe(concat('styles.css'))
//      .pipe(autoprefix('last 2 versions'))
//      .pipe(minifyCSS())
//      .pipe(gulp.dest('./build/styles/'));
//});

//// default gulp task
//// gulp.task('default', ['imagemin', 'htmlpage', 'scripts', 'styles'], function() {
//// });

//// default gulp task
//gulp.task('default', ['imagemin', 'htmlpage', 'scripts', 'styles'], function () {
//    // watch for HTML changes
//    gulp.watch('./src/*.html', function () {
//        gulp.run('htmlpage');
//    });

//    // watch for JS changes
//    gulp.watch('./src/scripts/*.js', function () {
//        gulp.run('jshint', 'scripts');
//    });

//    // watch for CSS changes
//    gulp.watch('./src/styles/*.css', function () {
//        gulp.run('styles');
//    });
//});
