/**
 * Created by edisondsouza on 12/08/17.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
// var cleanCSS = require('gulp-clean-css');
var build = require('gulp-useref');
var browserSync = require('browser-sync');
var gulpCopy = require('gulp-copy');

gulp.task('sass', function () {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass())
        // .pipe(cleanCSS())
        .pipe(gulp.dest('./src/styles/css'))
});

gulp.task('build', function () {
    return gulp.src('./index.html')
        .pipe(build())
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy', function () {
    return gulp.src('./src/assets/*')
        .pipe(gulp.dest('./dist/assets'));
});

// Static server
gulp.task('browser-sync-prod', function() {
    return browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('browser-sync-dev', function() {
    return browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('dev', ['sass', 'browser-sync-dev']);
gulp.task('default', ['sass', 'build', 'browser-sync-prod']);