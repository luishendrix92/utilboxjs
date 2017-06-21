(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.B = global.B || {})));
}(this, (function (exports) { 'use strict';

/**
 * Transforms the elements inside an array with a callback function.
 * @param { [*] } list
 * @param { function } transform
 * @return { [*] }
 */
function map(list, transform) {
  var length = list.length;

  var transformed = Array(length);
  var index = 0;
  var item = void 0;

  while (index < length) {
    item = list[index];

    transformed[index] = transform(item, index, list);
    index++;
  }

  return transformed;
}

// TODO: Implement mapcat

var toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

/**
 * Joins a multidimensional array from the inside-out using a set of provided joiners.
 * @param { [string] } joints
 * @param { [*] } list
 * @return { string }
 */
function flatJoin(joints, list) {
  var _joints = toArray(joints),
      head = _joints[0],
      tail = _joints.slice(1);

  return (tail.length ? map(list, function (level) {
    return flatJoin(tail, level);
  }) : list).join(head);
}

// TODO: Implement flattening

/**
 * Iterates over the given list and pass each item to a function that does some side-effects with it.
 * @param { [*] } list
 * @param { function } action
 * @return  { [*] }
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
 * A typical list comprehension, it takes two or more arrays and a curried function that receives each component of the comprehension, then does something with them.
 * @param { [*] } lists
 * @param { function } f
 * @return { * }
 */
function listComp(lists, f) {
  if (!lists.length) return [];

  var firstList = lists[0];
  var otherLists = lists.slice(1);
  var comprehension = [];

  each(firstList, function (item) {
    comprehension = comprehension.concat(otherLists.length ? listComp(otherLists, f(item)) : f(item));
  });

  return comprehension;
}

/**
 * Transposes an MxN bidimensional array. In linear algebra, transposing is the process of turning columns into rows, turning it into an NxM matrix. Example: [[1 2 3] [4 5 6]] (2x3) transposed is [[1 4] [2 5] [3 6]] (3x2). Needless to say, it returns a new bidimensional array.
 * @param {[[*]]} matrix
 * @return {[[*]]}
 */
function transpose(matrix) {
  var transposed = [];
  var mLen = matrix.length;
  var nLen = matrix[0] !== undefined ? matrix[0].length : 0;

  for (var n = 0; n < nLen; n += 1) {
    var row = [];

    for (var m = 0; m < mLen; m += 1) {
      row.push(matrix[m][n]);
    }transposed.push(row);
  }

  return transposed;
}

exports.flatJoin = flatJoin;
exports.listComp = listComp;
exports.transpose = transpose;

Object.defineProperty(exports, '__esModule', { value: true });

})));
