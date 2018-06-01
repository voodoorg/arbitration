'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const server = require('browser-sync');

function styles() {
  return gulp.src('src/sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'));
};

function start() {
  server.init({
    server: 'src/'
  });
  styles();
  gulp.watch('src/sass/**/*.scss', styles, server.reload);
  gulp.watch('src/*.html').on('change', server.reload);
  gulp.watch('src/*.js').on('change', server.reload);
};

exports.styles = styles;
exports.start = start;
