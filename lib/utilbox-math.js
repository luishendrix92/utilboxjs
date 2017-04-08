(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.B = global.B || {})));
}(this, (function (exports) { 'use strict';

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

function inRange(n, a, b) {
  var lClosed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var rClosed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

  var temp = a;
  a = a > b ? b : a;
  b = temp > b ? temp : b;

  return lClosed && rClosed ? n >= a && n <= b : !lClosed && rClosed ? n > a && n <= b : lClosed && !rClosed ? n >= a && n < b : !lClosed && !rClosed ? n > a && n < b : false;
}

/**
 * Converts an interval to another and pinpoints the equivalency of a number
 *
 * @param a1  :: Float
 * @param b1  :: Float
 * @param a2  :: Float
 * @param b2  :: Float
 * @param num :: Float
 *
 * @return    :: Float
 *
 * Algorithm semantics
 * -------------------
 * 
 * The equivalency of n from the scaled interval in the original interval
 * is equal to the left side of the original interval plus the distance
 * between the original interval times the percentage; and this percentage
 * is obtained by computing the distance between the number and the
 * left side of the scaled interval.
 */

function scale(a1, b1, a2, b2, num) {
  return a1 + (num - a2) / (b2 - a2) * (b1 - a1);
}

/*
 * Distance between two points (x, y) using the pythagorean theorem
 *
 * @param a :: Point :: [float, float]
 * @param b :: Point :: [float, float]
 *
 * @return float
 */

function distance(a, b) {
  if (arguments.length === 4) {
    a = [arguments[0], arguments[1]];
    b = [arguments[2], arguments[3]];
  }

  return Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2));
}

exports.inRange = inRange;
exports.scale = scale;
exports.distance = distance;

Object.defineProperty(exports, '__esModule', { value: true });

})));
