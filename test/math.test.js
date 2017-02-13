const _ = require('../lib/utilbox.js')

test('[inRange] Determines open or closed range inclusion of N', () => {
  expect(_.inRange(5.5, 5, 6)).toBe(true)
  expect(_.inRange(5, 6, -1)).toBe(true)
  expect(_.inRange(8, 0, 7)).toBe(false)
  expect(_.inRange(8, 8, 10, false)).toBe(false)
  expect(_.inRange(10, 8, 10, true, false)).toBe(false)
})

test('[scale] Pinpoints a number in interval A inside an interval B', () => {
  expect(_.scale(1, 10, 0.4, 0.8, 0.5)).toBeCloseTo(3.25)
  expect(_.scale(-2, 2, 0, 100, 50)).toBe(0)
})