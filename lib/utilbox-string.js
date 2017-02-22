(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.B = global.B || {})));
}(this, (function (exports) { 'use strict';

var SAFE_CALLSTACK = 11034;

/**
 * Repeat a string n times recursively and then returns the result.
 * Notice that this function is of recursive nature.
 *
 * @param str      :: String
 * @param repeats  :: Int    [default -> 1]
 * @param repeated :: String [default -> '']
 *
 * @return         :: String
 */

function repeat(str) {
  var repeats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var repeated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (!repeats || typeof repeats !== 'number' || repeats < 0 || repeats > SAFE_CALLSTACK) return repeated;

  return repeat(str, repeats - 1, repeated + str);
}

/**
 * Typical string padding from the length and the right up to
 * a certain character limit, filling with a certain char.
 *
 * @param  str  :: String
 * @param  max  :: Int
 * @param  fill :: String [default -> ' ']
 *
 * @return      :: String
 */

function padStart(str, max) {
  var fill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

  var strLen = str.length;

  if (max < strLen) return str;

  return repeat(fill, Math.ceil((max - strLen) / fill.length)).slice(0, max - strLen) + str;
}

function padEnd(str, max) {
  var fill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

  var strLen = str.length;

  if (max < strLen) return str;

  return str + repeat(fill, Math.ceil((max - strLen) / fill.length)).slice(0, max - strLen);
}

/**
 * Reverses a string by returning a reversed copy of it
 *
 * @param  str :: String
 *
 * @return     :: String
 */

function reverse(str) {
  if (typeof str !== 'string') return str;

  var reversed = '';

  for (var i = str.length - 1; i >= 0; i -= 1) {
    reversed += str[i];
  }

  return reversed;
}

exports.padStart = padStart;
exports.padEnd = padEnd;
exports.repeat = repeat;
exports.reverse = reverse;

Object.defineProperty(exports, '__esModule', { value: true });

})));
