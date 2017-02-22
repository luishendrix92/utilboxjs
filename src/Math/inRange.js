/**
 * Tells you whether 'n' is inside an open or closed interval range
 *
 * @param n       :: Float
 * @param a       :: Float
 * @param b       :: Float
 * @param lClosed :: Boolean [default -> true]
 * @param rClosed :: Boolean [default -> true]
 
 * @return        :: Boolean
 */

export function inRange(n, a, b, lClosed = true, rClosed = true) {
  let temp = a
  a = a > b? b : a
  b = temp > b? temp : b
  
  return do {
    if (lClosed && rClosed)
      n >= a && n <= b
    else if (!lClosed && rClosed)
      n > a && n <= b
    else if (lClosed && !rClosed)
      n >= a && n < b
    else if (!lClosed && !rClosed)
      n > a && n < b
    else
      false
  }
}