/**
 * Typical string padding from the length and the right up to
 * a certain character limit, filling with a certain char.
 * @param { string } str
 * @param { int } max
 * @param { int } from [optional, with default]
 * @param { int } fill [optional, with default]
 * @return { string }
 */

export function pad(str, max) {
  var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'left';
  var fill = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ' ';

  return 'void';
}