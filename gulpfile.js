const gulp      = require('gulp')
const rollup    = require('gulp-rollup')
const rename    = require('gulp-rename')
const babel     = require('rollup-plugin-babel')
const uglify    = require('rollup-plugin-uglify')
const babelConf = {
  'presets': [
    [
      'es2015',
      {
        'modules': false
      }
    ]
  ],
  'plugins': [
    'external-helpers'
  ]
}
const uglifyConf = {
  output: {
    comments: function(node, comment) {
      var text = comment.value;
      var type = comment.type;
      if (type === 'comment2') {
        return /@preserve|@license|@cc_on/i.test(text)
      }
    }
  }
}

gulp.task('bundle', () => {
  gulp.src('./index.js')
    .pipe(rollup({
      entry: './index.js',
      allowRealFiles: true,
      format: 'iife',
      moduleName: 'B',
      plugins: [babel(babelConf), uglify(uglifyConf)]
    }))
    .pipe(rename('utilbox.min.js'))
    .pipe(gulp.dest('./lib'))
    
  return gulp.src('./index.js')
    .pipe(rollup({
      entry: './index.js',
      allowRealFiles: true,
      format: 'umd',
      moduleName: 'B',
      plugins: [babel(babelConf)]
    }))
    .pipe(rename('utilbox.js'))
    .pipe(gulp.dest('./lib'))
})

gulp.task('sub-bundles', () => {
  const rollupConfig = (subMod) => ({
    entry: `./src/${subMod}/index.js`,
    allowRealFiles: true,
    format: 'umd',
    moduleName: 'B',
    plugins: [babel(babelConf)]
  })
  const subModules = [
    'Function',
    'Lang',
    'List',
    'Math',
    'Matrix',
    'Object',
    'Set',
    'String',
    'Structs'
  ]
  
  for (let subMod of subModules) {
    gulp.src(`./src/${subMod}/index.js`)
      .pipe(rollup(rollupConfig(subMod)))
      .pipe(rename(`utilbox-${subMod.toLowerCase()}.js`))
      .pipe(gulp.dest('./lib'))
  }
})

gulp.task('build', ['bundle', 'sub-bundles'], () => {
  gulp.watch('./src/**/*.js', ['bundle', 'sub-bundles'])
})