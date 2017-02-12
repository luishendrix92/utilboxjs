/**
 * Tells you whether n is in an open or closed interval
 * @param { Float } n
 * @param { Float } a
 * @param { Float } b
 * @param { Boolean } lClosed [with default]
 * @param { Boolean } rClosed [with default]
 * @return { Boolean }
 */

// @todo Figure out how to curry this, maybe with options...
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