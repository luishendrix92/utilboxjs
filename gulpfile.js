const gulp      = require('gulp')
const babel     = require('gulp-babel')
const rollup    = require('gulp-rollup')
const rename    = require('gulp-rename');
const uglify    = require('rollup-plugin-uglify')
const babelConf = {
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

gulp.task('bundle', () => {
  gulp.src('./index.js')
    .pipe(rollup({
      entry: './index.js',
      allowRealFiles: true,
      format: 'iife',
      moduleName: 'B',
      plugins: [
        uglify({
          output: {
            comments: function(node, comment) {
              var text = comment.value;
              var type = comment.type;
              if (type === 'comment2') {
                return /@preserve|@license|@cc_on/i.test(text)
              }
            }
          }
        })
      ]
    }))
    .pipe(rename('utilbox.min.js'))
    .pipe(gulp.dest('./lib'))
    
  return gulp.src('./index.js')
    .pipe(rollup({
      entry: './index.js',
      allowRealFiles: true,
      format: 'umd',
      moduleName: 'B'
    }))
    .pipe(rename('utilbox.js'))
    .pipe(gulp.dest('./lib'))
})

gulp.task('sub-bundles', () => {
  const rollupConfig = (subMod) => ({
    entry: `./dist/${subMod}/index.js`,
    allowRealFiles: true,
    format: 'umd',
    moduleName: 'B'
  })
  const subModules = [
    //'APIs',
    'Array',
    //'Function',
    'Math',
    //'Object',
    'String'
    //'Structs'
  ]
  
  for (let subMod of subModules) {
    gulp.src(`./dist/${subMod}/index.js`)
      .pipe(rollup(rollupConfig(subMod)))
      .pipe(rename(`utilbox-${subMod.toLowerCase()}.js`))
      .pipe(gulp.dest('./lib'))
  }
})

gulp.task('build', ['transpile', 'bundle'], () => {
  gulp.watch('./src/**/*.js', ['transpile', 'bundle'])
})