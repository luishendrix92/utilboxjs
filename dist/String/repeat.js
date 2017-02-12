/**
 * Repeat a string n recursively and return it
 * @param { string } str
 * @param { int } repeats [with default]
 * @param { repeated } the repeated string [tail-call, with default]
 * @return { string }
 */

export function repeat(str) {
  var repeats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var repeated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (repeats === Infinity || repeats < 1 || !repeats) return repeated;

  return repeat(str, repeats - 1, repeated + str);
}