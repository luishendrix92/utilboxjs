const _ = require('../lib/utilbox.cjs.js')

test('Pad from the left', () => {
  let paddedLeft = _.pad()
  
  expect(paddedLeft).toBe('void')
})