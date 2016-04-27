const gulp = require('gulp');
const webpack = require('gulp-webpack');
const del = require('del');

gulp.task('default', ['server']);

gulp.task('clean', () => {
  return del('dist/**/*');
});

gulp.task('css', ['clean'], () => {
  return gulp.src('client/css/**/*')
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', ['css'], () => {
  const config = require('./webpack.config');
  config.watch = true;

  gulp.watch('client/css/**/*', ['css']);

  return gulp.src('client/js/main.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['css'], () => {
  return gulp.src('client/js/main.js')
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest('dist/'));
});

gulp.task('server', ['build'], () => {
  require('./server');
});