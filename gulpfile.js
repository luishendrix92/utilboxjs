const gulp      = require('gulp')
const source    = require('vinyl-source-stream')
const streamify = require('gulp-streamify')
const uglify    = require('gulp-uglify')
const babel     = require('gulp-babel')

gulp.task('transpile', () => {
  return gulp.src('./src/**/*.js')
    .pipe(babel({
      presets: ['es2015', 'stage-0']
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['transpile'], () => {
  gulp.watch('./src/**/*.js', ['transpile'])
})