// include plug-ins
var gulp        = require('gulp'),
    sass        = require('gulp-ruby-sass'),
    notify      = require('gulp-notify'),
    bower       = require('gulp-bower'),
    sourcemaps  = require('gulp-sourcemaps'),
    concat      = require('gulp-concat'),
    stripDebug  = require('gulp-strip-debug'),
    uglify      = require('gulp-uglify'),
    changed     = require('gulp-changed'),
    imagemin    = require('gulp-imagemin'),
    minifyHTML  = require('gulp-minify-html'),
    autoprefix  = require('gulp-autoprefixer'),
    minifyCSS   = require('gulp-minify-css'),
    jshint      = require('gulp-jshint');

var config = {
    contentPath: './public/content',
    sassPath: './public/content/sass',
    cssPath     : './public/content/css',
    bowerDir    : './public/_lib',
    angularPath : './public/modules'
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
        .pipe(gulp.dest(config.cssPath))
});

// JS hint task
gulp.task('jshint', function () {
    gulp.src(config.angularPath + '/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

// default gulp task
gulp.task('default', ['bower', 'icons', 'css', 'jshint'], function () {
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
