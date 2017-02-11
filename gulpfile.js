const gulp      = require('gulp')
const source    = require('vinyl-source-stream')
const streamify = require('gulp-streamify')
const uglify    = require('gulp-uglify')
const babel     = require('gulp-babel')
const rename    = require('gulp-rename')

gulp.task('transpile', () => {
  return gulp.src('./src/**/*.js')
    .pipe(babel({
      presets: ['es2015', 'stage-0']
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('make index', () => {
  return gulp.src('./index.babel.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(rename('index.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('build', ['transpile', 'make index'], () => {
  gulp.watch('./src/**/*.js', ['transpile', 'make index'])
})