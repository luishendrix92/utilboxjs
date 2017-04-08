(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.B = global.B || {})));
}(this, (function (exports) { 'use strict';

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


  if (!length) return acc || null;

  var result = acc !== undefined ? acc : list[0];
  var i = acc !== undefined ? 0 : 1;

  while (i < length) {
    result = reducer(result, list[i], i, list);

    i += 1;
  }

  return result;
}

/**
 * Sends a value through a series of functions in the given order and
 * returns the result of this pipeline to the caller. This acts like
 * compose() but from left to right; the resulting composed
 * function gets invoked with the given value.
 *
 * For sanity purposes, all of the functions in the pipeline really must
 * have an arity of 1, meaning, they should only take one argument.
 *
 * @param x     :: Object|Primitive
 * @param funcs :: [...Function]
 *
 * @return      :: Object|Primitive
 */

function pipe(x) {
  for (var _len = arguments.length, funcs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    funcs[_key - 1] = arguments[_key];
  }

  return reduce(funcs, function (result, func) {
    return func(result);
  }, x);
}

exports.pipe = pipe;

Object.defineProperty(exports, '__esModule', { value: true });

})));
