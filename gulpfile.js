const gulp = require('gulp');
const webpack = require('gulp-webpack');
const del = require('del');

gulp.task('default', ['server']);

gulp.task('clean', () => {
  return del('dist/**/*');
});

gulp.task('watch', ['build'], () => {
  gulp.watch('client/**/*', ['build']);
});

gulp.task('build', ['clean'], () => {
  gulp.src('client/css/**/*')
    .pipe(gulp.dest('dist/css'));

  return gulp.src('client/js/main.js')
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest('dist/'));
});

gulp.task('server', ['build'], () => {
  require('./server');
});