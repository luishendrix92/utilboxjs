/**
 * Make an array with integers from 'a' to 'b' (inclusive) if 'a' is less than or equal to 'b', otherwise, a reverse range.
 * @param { number } a
 * @param { number } b
 * @return { [number] }
 */
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