(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.B = global.B || {})));
}(this, (function (exports) { 'use strict';

// [a, b] / n

// Basic circular-circular and rectangular-rectangular collision; wall collision as well

// Implement digits: 123 -> [1,2,3] | 023 -> [0,2,3]

/**
 * Distance between two points (x, y) using the pythagorean theorem. Beware floating point precision.
 * @param { [number] } p1
 * @param  { [number] } p2
 * @return { number }
 */
function distance(p1, p2) {
  if (arguments.length === 4) {
    p1 = [arguments[0], arguments[1]];
    p2 = [arguments[2], arguments[3]];
  }

  return Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));
}

// implement is even or odd

// implement factorial

// Fps to Ms and vicesversa

// Implement hypoenuse with two catets

// TODO: Implement => inc, dec

/**
 * Tells you whether a number is inside an open or closed interval range.
 * @param { number } n
 * @param { number } a
 * @param { number } b
 * @param { boolean } lClosed
 * @param { boolean } rClosed
 * @return { boolean }
 */
function inRange(n, a, b) {
  var lClosed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var rClosed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

  var temp = a;
  a = a > b ? b : a;
  b = temp > b ? temp : b;

  if (lClosed && rClosed) {
    return n >= a && n <= b;
  } else if (!lClosed && rClosed) {
    return n > a && n <= b;
  } else if (lClosed && !rClosed) {
    return n >= a && n < b;
  } else if (!lClosed && !rClosed) {
    return n > a && n < b;
  } else {
    return false;
  }
}

// Implement product of list

// Implement quotient

/**
 * Returns a random number in between an inclusive range of two numbers (they can be negative). If there's only one argument passed, the start is 0. A little caveat is that you can obtain a -0 if your only argument is a negative value.
 */
function random(a, b) {
  var start = b === undefined ? 0 : a;
  var end = b === undefined ? a < 0 ? -a : a : b;

  return Math.floor(Math.random() * (end - start + 1) + start) * (a < 0 && b === undefined ? -1 : 1);
}

// Roman numeral conversion

/**
 * Converts an interval to another and pinpoints the equivalency of a number
 * @param { number } a1
 * @param { number } b1
 * @param { number } a2
 * @param { number } b2
 * @param { number } num
 * @return { number }
 */
function scale(a1, b1, a2, b2, num) {
  return a1 + (num - a2) / (b2 - a2) * (b1 - a1);
}

/* Algorithm semantics
*  --------------------
*  The equivalency of N from the scaled interval in the original interval
*  is equal to the left side of the original interval plus the distance
*  between the original interval times the percentage; and this percentage
*  is obtained by computing the distance between the number and the
*  left side of the scaled interval.                                    */

// -1 1

// Median, Average etc

// Implement the sum and average of a list

// Implement decimal to fraction

exports.distance = distance;
exports.inRange = inRange;
exports.random = random;
exports.scale = scale;

Object.defineProperty(exports, '__esModule', { value: true });

})));
