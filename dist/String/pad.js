import { repeat } from './repeat';

/**
 * Typical string padding from the length and the right up to
 * a certain character limit, filling with a certain char.
 * @param { string } str
 * @param { int } max
 * @param { string } fill [optional, with default]
 * @return { string }
 */

export function padStart(str, max) {
  var fill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

  var strLen = str.length;

  return repeat(fill, Math.ceil((max - strLen) / fill.length)).slice(0, max - strLen) + str;
}

export function padEnd(str, max) {
  var fill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

  var strLen = str.length;

  return str + repeat(fill, Math.ceil((max - strLen) / fill.length)).slice(0, max - strLen);
}