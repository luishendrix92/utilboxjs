// import uglify from 'rollup-plugin-uglify'

export default {
  entry: './index.js',
  dest: './lib/utilbox.js',
  format: 'umd',
  moduleName: 'Ub',
  /*plugins: [
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
  ]*/
}