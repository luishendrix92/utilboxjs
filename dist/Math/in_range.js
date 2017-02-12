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
export function inRange(n, a, b) {
  var lClosed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var rClosed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

  var temp = a;
  a = a > b ? b : a;
  b = temp > b ? temp : b;

  return lClosed && rClosed ? n >= a && n <= b : !lClosed && rClosed ? n > a && n <= b : lClosed && !rClosed ? n >= a && n < b : !lClosed && !rClosed ? n > a && n < b : false;
}