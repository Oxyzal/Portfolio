'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function(){
    return gulp.src('./css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css'));
})


gulp.task("watch", function(){
    gulp.watch('css/**/*.scss', gulp.series('sass'));
})