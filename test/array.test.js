const _ = require('../lib/utilbox.js')

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

test('[range] Assembles an array from a to b with integers', () => {
  expect(_.range(4, 7)).toEqual([4, 5, 6, 7])
  expect(_.range(7, 4)).toEqual([4, 5, 6, 7])
  expect(_.range(-4, 1)).toEqual([-4, -3, -2, -1, 0, 1])
  expect(_.range(3)).toEqual([0, 1, 2, 3])
  expect(_.range(3, 3)).toEqual([3])
});