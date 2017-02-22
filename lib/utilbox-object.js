(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.B = global.B || {})));
}(this, (function (exports) { 'use strict';

var hop = function hop(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

/**
 * Converts an object literal into an jagged array of key-value tuples.
 * By default, it takes in account those enumerable properties that
 * the object has in its prototype; change to 'false' and they
 * will be excluding, leaving only 'own' properties.
 *
 * @param obj       :: Object
 * @param inherited :: Boolean [default -> true]
 *
 * @return          :: [Array]
 */

function pairs(obj) {
  var inherited = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var pairs = [];

  for (var key in obj) {
    if (inherited || hop(obj, key)) {
      pairs.push([key, obj[key]]);
    }
  }

  return pairs;
}

exports.pairs = pairs;

Object.defineProperty(exports, '__esModule', { value: true });

})));
