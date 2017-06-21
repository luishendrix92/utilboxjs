/**
 * Tells you whether a number is inside an open or closed interval range.
 * @param { number } n
 * @param { number } a
 * @param { number } b
 * @param { boolean } lClosed
 * @param { boolean } rClosed
 * @return { boolean }
 */
export function inRange(n, a, b, lClosed = true, rClosed = true) {
  let temp = a
  a = a > b? b : a
  b = temp > b? temp : b
  
  if (lClosed && rClosed) {
    return n >= a && n <= b
  } else if (!lClosed && rClosed) {
    return n > a && n <= b
  } else if (lClosed && !rClosed) {
    return n >= a && n < b
  } else if (!lClosed && !rClosed) {
    return n > a && n < b
  } else {
    return false
  }
}