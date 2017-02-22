const _ = require('../lib/utilbox.js')

describe('RegExp Scan', () => {
  test('[scanStr] Displays an array of matches with capture groups', () => {
    let [[a1, a2], [b1, b2]] = _.scanStr('abcd abce', /c(d|e)/)
    
    expect([a1, a2]).toEqual(['cd', 'd'])
    expect([b1, b2]).toEqual(['ce', 'e'])
  })
  
  test('[scanStr] Returns an empty string if there were no matches', () => {
    expect(_.scanStr('nothing', /c(d|e)/).length).toEqual(0)
  })
})

describe('Toggler Switch', () => {
  test('[toggler] Returns a function that returns either value passed', () => {
    let color = _.toggler('Black', 'White')
    let colors = _.pipe(Array(5), arr => _.map(arr, color))
    
    expect(colors).toEqual(['Black', 'White', 'Black', 'White', 'Black'])
  })
  
  test('[toggler] Must use the left side if there is no right side', () => {
    let brokenToggler = _.toggler(5)
    
    expect([brokenToggler(), brokenToggler()]).toEqual([5, 5])
  })
})