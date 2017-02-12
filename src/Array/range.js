/**
 * Make an array with integers from a to b (both inclusive)
 * @param { int } a
 * @param { int } b
 * @return { string }
 */

// @note Perhaps I could handle reverse ranges...
export function range(a, b) {
  let temp = a
  a = !b? 0 : (a > b? b : a)
  b = !b? temp : (temp > b? temp : b)

  let _range = Array((b - a) || 1)
  let i = 0
  
  while (a <= b) {
    _range[i] = a
    i += 1
    a++
  }
  
  return _range
}