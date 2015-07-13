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
    minifyCSS = require('gulp-minify-css'),
    debug       = require('gulp-debug'),
    browserify = require('gulp-browserify'),
    connect = require('gulp-connect'),
    clean = require('gulp-clean'),
    runSequence = require('run-sequence'),
    browsersync = require('browser-sync'),
    jshint = require('gulp-jshint');


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
                config.bowerDir + '/fontawesome/scss'           ]
        })
        .on("error", notify.onError(function (error) {
            return "Error: " + error.message;
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.cssPath))
});

// JS hint task
//gulp.task('jshint', function () {
//    gulp.src(config.angularPath + '/**/*.js')
//      .pipe(jshint())
//      .pipe(jshint.reporter('default'));
//});
gulp.task('jshint', function () {
    gulp.src(['./public/**/*.js', '!./public/_lib/**', '!./public/content/**'])
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(jshint.reporter('fail'));
});

//===================================
gulp.task('clean', function () {
    gulp.src('./dist/*')
      .pipe(clean({ force: true }));
    gulp.src('./public/content/js/bundled.js')
      .pipe(clean({ force: true }));
});
gulp.task('connect', function () {
    connect.server({
        root: '/',
        port: 8888
    });
});
gulp.task('connectDist', function () {
    connect.server({
        root: 'dist/',
        port: 9999
    });
});
gulp.task('browserify', function () {
    gulp.src(['public/main.js'])
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(concat('bundled.js'))
        .pipe(gulp.dest('./public/content/js'));
});


gulp.task('browserify_', function () {
    gulp.src(['app/js/main.js'])
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(concat('bundled.js'))
        .pipe(gulp.dest('./app/js'));
});
gulp.task('browserifyDist', function () {
    gulp.src(['app/js/main.js'])
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(concat('bundled.js'))
        .pipe(gulp.dest('./dist/js'));
});

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
gulp.task('copy-bower-components', function () {
    gulp.src('./app/bower_components/**')
      .pipe(gulp.dest('dist/bower_components'));
});
gulp.task('copy-html-files', function () {
    gulp.src('./app/**/*.html')
      .pipe(gulp.dest('dist/'));
})

gulp.task('browsersync', function (cb) {
    return browsersync({
        server: {
            baseDir: './www/'
        }
    }, cb);
});

// default task
gulp.task('defaultaa', 
  ['jshint', 'browserify']
);

// default gulp task
gulp.task('default', ['jshint', 'browserify'], function () {

    // watch for JS changes
    gulp.watch('public/main.js', function () {
        runSequence('clean', 'browserify', browsersync.reload);
    });

    //// watch for scss changes
    //gulp.watch(config.sassPath + '/**/*.scss', function () {
    //    gulp.run('css');
    //});

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
//============================



// JS concat, strip debugging and minify
gulp.task('scripts', function () {
    gulp.src(['./public/_lib/angular/angular.js', './public/app.js', './public/modules/**/*.js'])
      .pipe(concat('script.js'))
      .pipe(stripDebug())
      .pipe(uglify())
      .pipe(gulp.dest('./public/content/scripts'));
});

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



//// CSS concat, auto-prefix and minify
//gulp.task('styles', function () {
//    gulp.src(['./src/styles/*.css'])
//      .pipe(concat('styles.css'))
//      .pipe(autoprefix('last 2 versions'))
//      .pipe(minifyCSS())
//      .pipe(gulp.dest('./build/styles/'));
//});


//"angular": "^1.4.1",
//   "angular-animate": "^1.4.2",
//   "angular-route": "^1.4.2",