const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');


function css() {
    return gulp
      .src('./scss/**/*.scss')

      .pipe(sass().on('error', sass.logError))

      .pipe(autoprefixer({
          browsers: ['last 2 versions'],
       }))

      .pipe(gulp.dest('./assets'))
      
      .pipe(browserSync.stream());
}


function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })

    gulp.watch('./scss/**/*.scss', css);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./assets/**/*.js').on('change', browserSync.reload);
}

exports.css = css;
exports.watch = watch;