'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
  };

gulp.task('dev', ['sass', 'sass:watch']);
gulp.task('prod', ['sass', 'uglify']);

// Tasks for Develpment
gulp.task('sass', function () {
    return gulp
    .src('./sass/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('./app/assets/css'));
});
gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

// Tasks for Production
gulp.task('sass-dev', function () {
    return gulp
        .src('./sass/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest('./app/assets/css'));
});
