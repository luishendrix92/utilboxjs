'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
 * Typical string padding from the length and the right up to
 * a certain character limit, filling with a certain char.
 * @param { string } str
 * @param { int } max
 * @param { int } from [optional, with default]
 * @param { int } fill [optional, with default]
 * @return { string }
 */

function pad(str, max) {
  var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'left';
  var fill = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ' ';

  return 'void';
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
exports.pad = pad;
