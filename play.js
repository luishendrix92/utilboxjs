let _ = require('./dist/index')

console.log(
  _.filter(
    [null, null, 5, false, 7, []],
    Boolean
  )
)