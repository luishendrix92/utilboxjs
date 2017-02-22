const _ = require('../lib/utilbox.js')

function Dummy(a, b) {
  this.foo = 'bar'
  this.baz = 'qux'
}

Dummy.prototype.corge = 'grault'

let dum = new Dummy()
let obj = {}

describe('Key value pair tuples', () => {
  test('[pairs] Returns a list of key-value pairs from an object', () => {
    expect(_.pairs(dum))
      .toEqual([['foo', 'bar'], ['baz', 'qux'], ['corge', 'grault']])
  })
  
  test('[pairs] Get only "own" properties if the user wants', () => {
    expect(_.pairs(dum, false))
      .toEqual([['foo', 'bar'], ['baz', 'qux']])
  })
})