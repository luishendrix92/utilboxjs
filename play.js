let _ = require('./index')

console.log(
  _.map(
    [null, null, 5, false, 7, []],
    Boolean
  )
)