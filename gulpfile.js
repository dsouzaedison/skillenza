/**
 * Created by edisondsouza on 12/08/17.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
// var cleanCSS = require('gulp-clean-css');
var build = require('gulp-useref');
var browserSync = require('browser-sync').create();
var watch = require('gulp-watch');

gulp.task('sass', function() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/styles/css'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch('./src/styles/*.scss', ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('build', function () {
    return gulp.src('./index.html')
        .pipe(build())
        .pipe(gulp.dest('./dist'));
});

gulp.task('stream', function () {
    // Endless stream mode
    return watch('/src/styles/*.scss', { ignoreInitial: false }, ['sass']);
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

gulp.task('dev', ['serve']);
gulp.task('default', ['sass', 'build', 'browser-sync-prod']);