const _ = require('../dist/Array/index')

test('Map transforms an array given a callback', () => {
  let mapped = _.map([1, 2, 3], (n) => n * n)
  
  expect(mapped).toEqual([1, 4, 9])
});

test('Filter keeps only the items that match a spec', () => {
  let list     = ['hello', 'test', [1, 2, 3, 4, 5]]
  let filtered = _.filter(list, (iter) => iter.length > 4)
    
  expect(filtered).toEqual(['hello', [1, 2, 3, 4, 5]])
});

test('Each iterates over a collection with side-effects', () => {
  let outer = 0
  
  _.each([1, 2, 3], (n) => {
    outer += n
  })
  
  expect(outer).toBe(6)
});