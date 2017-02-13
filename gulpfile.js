const gulp       = require('gulp')
const source     = require('vinyl-source-stream')
const streamify  = require('gulp-streamify')
const uglify     = require('gulp-uglify')
const babel      = require('gulp-babel')
const rename     = require('gulp-rename')
const babelConf  = {
  presets: [
    ['es2015', { 'modules': false }],
    'stage-0'
  ]
}

gulp.task('transpile', () => {
  return gulp.src('./src/**/*.js')
    .pipe(babel(babelConf))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['transpile'], () => {
  gulp.watch('./src/**/*.js', ['transpile'])
})