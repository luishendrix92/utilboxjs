const _ = require('../lib/utilbox.cjs.js')

test('[map] Transforms a list with a function', () => {
  let mapped = _.map([1, 2, 3], (n) => n * n)
  
  expect(mapped).toEqual([1, 4, 9])
});

test('[filter] Filters a list with a function spec', () => {
  let list     = ['hello', 'test', [1, 2, 3, 4, 5]]
  let filtered = _.filter(list, (iter) => iter.length > 4)
    
  expect(filtered).toEqual(['hello', [1, 2, 3, 4, 5]])
});

test('[each] Iterates over a collection with side-effects', () => {
  let outer = 0
  
  _.each([1, 2, 3], (n) => {
    outer += n
  })
  
  expect(outer).toBe(6)
});