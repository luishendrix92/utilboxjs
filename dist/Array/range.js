/**
 * Make an array with integers from a to b (both inclusive)
 * @param { int } a
 * @param { int } b
 * @return { string }
 */

// @note Perhaps I could handle reverse ranges...
export function range(a, b) {
  var temp = a;
  a = !b ? 0 : a > b ? b : a;
  b = !b ? temp : temp > b ? temp : b;

  var _range = Array(b - a || 1);
  var i = 0;

  while (a <= b) {
    _range[i] = a;
    i += 1;
    a++;
  }

  return _range;
}