const _ = require('../lib/utilbox.js')

test('[repeat] Must repeat a string n times', () => {
  expect(_.repeat('abc', 4)).toBe('abcabcabcabc')
  expect(_.repeat('abc', 1)).toBe('abc')
  expect(_.repeat('abc', 0)).toBe('')
  expect(_.repeat('abc', -1)).toBe('')
  expect(_.repeat('abc', NaN)).toBe('')
  expect(_.repeat('abc', Infinity)).toBe('')
})

test('[padStart] Should fill the string from the left', () => {
  expect(_.padStart('abcd', 10)).toBe('      abcd')
  expect(_.padStart('abc', 10, 'foo')).toBe('foofoofabc')
  expect(_.padStart('abc', 6, '123465')).toBe('123abc')
  expect(_.padStart('abc', 8, '*')).toBe('*****abc')
})

test('[padEnd] Should fill the string from the right', () => {
  expect(_.padEnd('abcd', 10)).toBe('abcd      ')
  expect(_.padEnd('abc', 10, 'foo')).toBe('abcfoofoof')
  expect(_.padEnd('abc', 6, '123456')).toBe('abc123')
})