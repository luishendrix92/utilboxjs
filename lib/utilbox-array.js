(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.B = global.B || {})));
}(this, (function (exports) { 'use strict';

/**
 * Iterates over the given list and pass each item
 * to a function that does some side-effects with it.
 *
 * @param list   :: Array
 * @param action :: Function
 *
 * @return       :: Array
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
 *
 * @param list :: Array
 * @param spec :: Function
 *
 * @return     :: Array
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
 *
 * @param list      :: Array
 * @param transform :: Function
 *
 * @return          :: Array
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
 * Make an array with integers from 'a' to 'b' (inclusive) if 'a' is less
 * than or equal to 'b', otherwise, a reverse range.
 *
 * @param a :: Int
 * @param b :: Int
 *
 * @return  :: Array
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
 * Parting from an accumulator, iterates over an array to change the
 * accumulator by using the provided values from the array.
 * If there's no accumulator, the first item will be used.
 *
 * @param list    :: Array
 * @param reducer :: Function
 * @param acc     :: Object|Primitive [optional]
 *
 * @return        :: Object|Primitive
 */

function reduce(list, reducer, acc) {
  var length = list.length;


  if (!length) return null;

  var result = acc !== undefined ? acc : list[0];
  var i = acc !== undefined ? 0 : 1;

  while (i < length) {
    result = reducer(result, list[i], i, list);

    i += 1;
  }

  return result;
}

/**
 * A typical list comprehension, it takes two or more arrays and a
 * curried function that receives each component of the comprehension
 * and does something with them. You can compare this to what you'd
 * find in languages like Python, Haskell or Elixir.
 *
 * @param list :: Array
 * @param func :: Function
 *
 * @return     :: [Object|Primitive]
 */

function listComp(lists, func) {
  if (!lists.length) return [];

  var firstList = lists[0];
  var otherLists = lists.slice(1);
  var comprehension = [];

  each(firstList, function (item) {
    comprehension = comprehension.concat(otherLists.length ? listComp(otherLists, func(item)) : func(item));
  });

  return comprehension;
}

exports.each = each;
exports.filter = filter;
exports.map = map;
exports.range = range;
exports.reduce = reduce;
exports.listComp = listComp;

Object.defineProperty(exports, '__esModule', { value: true });

})));
