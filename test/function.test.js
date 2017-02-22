const _ = require('../lib/utilbox.js')

describe('Pipeline', () => {
  test('[pipe] Should return \'x\' when no functions were given', () => {
    expect(_.pipe(5)).toBe(5)
  })

  test('[pipe] Should pass a value down a pipeline of functions', () => {
    let result1 = _.pipe(10, x => x + 4, x => x / 2)
    let result2 = _.pipe(
      [0, 5, 3, 48],
      xs => _.map(xs, x => x + 1),
      xs => _.filter(xs, x => !(x % 2))
    )
    
    expect(result1).toBe(7)
    expect(result2).toEqual([6, 4])
  })
})