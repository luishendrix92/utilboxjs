(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.Ub = global.Ub || {})));
}(this, (function (exports) { 'use strict';

/**
 * Iterates over the given list with an side-effect
 * @param { array } list
 * @param { function } action
 * @return { array }
 */

function each(list, action) {
  var length = list.length;
  var index = 0;

  while (index < length) {
    action(list[index], index, list);

    index++;
  }

  return list;
}

/**
 * Creates a new list that contains items from the given list
 * that meet a certain criteria specified as a callback function.
 * @param { array } list
 * @param { function } spec
 * @return { array }
 */

function filter(list, spec) {
  var length = list.length;
  var filtered = [];
  var index = 0;
  var _index = 0;

  while (index < length) {
    var item = list[index];

    if (spec(item, index, list)) {
      filtered[_index] = item;
      _index++;
    }

    index++;
  }

  return filtered;
}

/**
 * Transforms an array into a new array after transforming the
 * elements inside it with a callback function.
 * @param { array } list
 * @param { function } transform
 * @return { array }
 */

function map(list, transform) {
  var length = list.length;
  var transformed = Array(length);
  var index = 0;

  while (index < length) {
    var item = list[index];

    transformed[index] = transform(item, index, list);
    index++;
  }

  return transformed;
}

/**
 * Make an array with integers from a to b (both inclusive)
 * @param { int } a
 * @param { int } b
 * @return { string }
 *
 * [NOTE] Perhaps I could handle reverse ranges...
 */

function range(a, b) {
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

/**
 * Tells you whether n is in an open or closed interval
 * @param { Float } n
 * @param { Float } a
 * @param { Float } b
 * @param { Boolean } lClosed [with default]
 * @param { Boolean } rClosed [with default]
 * @return { Boolean }
 *
 * [TODO] Figure out how to curry this, maybe with options!
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
 * @param { Float } a1
 * @param { Float } b1
 * @param { Float } a2
 * @param { Float } b2
 * @param { Float } num
 * @return { Float }
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

/**
 * Repeat a string n times recursively and then returns the result
 * @param { string } str
 * @param { int } repeats [with default]
 * @param { repeated } the repeated string [tail-call, with default]
 * @return { string }
 */

function repeat(str) {
  var repeats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var repeated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (repeats === Infinity || repeats < 1 || !repeats) return repeated;

  return repeat(str, repeats - 1, repeated + str);
}

/**
 * Typical string padding from the length and the right up to
 * a certain character limit, filling with a certain char.
 * @param { string } str
 * @param { int } max
 * @param { string } fill [optional, with default]
 * @return { string }
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
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

exports.each = each;
exports.filter = filter;
exports.map = map;
exports.range = range;
exports.inRange = inRange;
exports.scale = scale;
exports.repeat = repeat;
exports.padStart = padStart;
exports.padEnd = padEnd;

Object.defineProperty(exports, '__esModule', { value: true });

})));
