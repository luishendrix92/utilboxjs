const gulp      = require('gulp')
const source    = require('vinyl-source-stream')
const streamify = require('gulp-streamify')
const uglify    = require('gulp-uglify')
const babel     = require('gulp-babel')
const rename    = require('gulp-rename')

gulp.task('transpile-modules', () => {
  return gulp.src('./src/**/*.js')
    .pipe(babel({
      presets: [['es2015', { 'modules': false }], 'stage-0']
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('transpile-tests', () => {
  return gulp.src('./test/es6/*.js')
    .pipe(babel({
      presets: ['es2015', 'stage-0']
    }))
    .pipe(rename({
      suffix: '.test'
    }))
    .pipe(gulp.dest('./test'));
});

gulp.task('build', ['transpile-modules', 'transpile-tests'], () => {
  gulp.watch('./src/**/*.js', ['transpile-modules'])
  gulp.watch('./test/es6/*.js', ['transpile-tests'])
})