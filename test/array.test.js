const _ = require('../lib/utilbox.js')

test('[map] Transforms a list with a function', () => {
  let mapped = _.map([1, 2, 3], (n) => n * n)
  
  expect(mapped).toEqual([1, 4, 9])
})

test('[filter] Filters a list with a function spec', () => {
  let list     = ['hello', 'test', [1, 2, 3, 4, 5]]
  let filtered = _.filter(list, (iter) => iter.length > 4)
    
  expect(filtered).toEqual(['hello', [1, 2, 3, 4, 5]])
})

test('[each] Iterates over a collection with side-effects', () => {
  let outer = 0
  
  _.each([1, 2, 3], (n) => { outer += n })
  expect(outer).toBe(6)
})

test('[range] Assembles an array from a to b with integers', () => {
  expect(_.range(4, 7)).toEqual([4, 5, 6, 7])
  expect(_.range(7, 4)).toEqual([4, 5, 6, 7])
  expect(_.range(-4, 1)).toEqual([-4, -3, -2, -1, 0, 1])
  expect(_.range(3)).toEqual([0, 1, 2, 3])
  expect(_.range(3, 3)).toEqual([3])
})

describe('Reducing', () => {
  let emptyReduce  = _.reduce([], (a, b) => a + b)
  let oneItemCase1 = _.reduce(
    ['hey'],
    (acc, item) => `${acc} ${item}! What's going on??!!`,
    'I said'
  )
  let oneItemCase2   = _.reduce([5], (a, b) => a + b)
  let noAcc          = _.reduce(_.range(1, 5), (prev, curr) => prev * curr)
  let valuesObtained = _.reduce([
    { foo: 'bar', baz: 'qux' },
    { quux: 'quuz', corge: 'grault' }
  ], (values, obj) => {
    let theseValues  = _.map(Object.keys(obj), k => obj[k])
    
    return values.concat(theseValues)
  }, [])
  
  test('[reduce] The first element is the accumulator if not provided', () => {
    expect(noAcc).toBe(120)
  })
  
  test('[reduce] Should reduce a list with an accumulator', () => {
    expect(valuesObtained).toEqual(['bar', 'qux', 'quuz', 'grault'])
  })
  
  test('[reduce] Must return an NULL when an empty list is provided', () => {
    expect(emptyReduce).toEqual(null)
  })
  
  test('[reduce] Should handle cases where only one item exists', () => {
    expect(oneItemCase1).toBe(`I said hey! What's going on??!!`)
    expect(oneItemCase2).toBe(5)
  })
})

describe('List comprehension', () => {
  test('[listComp] should be able to comprehend two or more lists', () => {
    let result = _.listComp([
      ['cherry', 'grape', 'lemon'],
      ['lollipop', 'juice']
    ], flavour => sweet => `I love me some ${flavour} ${sweet}`)
    
    expect(result).toEqual([
      'I love me some cherry lollipop',
      'I love me some cherry juice',
      'I love me some grape lollipop',
      'I love me some grape juice',
      'I love me some lemon lollipop',
      'I love me some lemon juice'
    ])
  })
  
  test('[listComp] must also act on a single list', () => {
    let result = _.listComp([[1, 2, 3]], x => x * x)
    
    expect(result).toEqual([1, 4, 9])
  })
  
  test('[listComp] should return empty list if "lists" is empty', () => {
    expect(_.listComp([], Math.sin)).toEqual([])
  })
  
  test('[listComp] should return empty list if at least one is empty', () => {
    expect(_.listComp([[1,2,3], []], x => y => x + y)).toEqual([])
  })
  
  test('[listComp] should return empty list if "lists" is not jagged', () => {
    expect(_.listComp([1,2,3], Math.sin)).toEqual([])
  })
})