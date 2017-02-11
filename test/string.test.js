const _ = require('../dist/String/index')

test('Pad from the left', () => {
  let paddedLeft = _.pad()
  
  expect(paddedLeft).toBe('void')
})