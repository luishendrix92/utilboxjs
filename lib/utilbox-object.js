(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.B = global.B || {})));
}(this, (function (exports) { 'use strict';

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
 * Composable proxy for hasOwnProperty
 * @private
 * @param { object } obj 
 * @param { string } prop 
 * @return { boolean }
 */
var hop = function hop(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

/**
 * Inverts an object by turning its keys into values and its values into keys. This function mutates the object in place so be careful; also, it's based on JSON.stringify() which means, if you have reference values, it will turn them into their string representation as keys. It's also preferred that there are no duplicate values or strange things will happen.
 * @param { object } source
 * @return { object }
 */
function invert(source) {
  var reviewed = [];
  var newKey = void 0,
      currVal = void 0;

  for (var key in source) {
    if (hop(source, key)) {
      currVal = source[key];
      newKey = typeof currVal === 'string' ? currVal : JSON.stringify(source[key]);

      source[newKey] = key;
      reviewed.push(key);
    }
  }

  each(reviewed, function (reviewedKey) {
    return delete source[reviewedKey];
  });

  return source;
}

/**
 * Returns an object's own keys as an array of strings. It uses a for-in loop in the back in combination with hasOwnProperty.
 * @param { object } obj
 * @return { [string] }
 */
function keys(obj) {
  var objKeys = [];

  for (var key in obj) {
    if (hop(obj, key)) {
      objKeys.push(key);
    }
  }

  return objKeys;
}

/**
 * Returns an object's own values as an array. It uses a for-in loop in the back in combination with hasOwnProperty.
 * @param { object } obj
 * @return { [*] }
 */
function values(obj) {
  var objValues = [];

  for (var key in obj) {
    if (hop(obj, key)) {
      objValues.push(obj[key]);
    }
  }

  return objValues;
}

// TODO: Implement shallow comparator

/**
 * Converts an object literal into a list of key-value pairs. By default, it doesn't take in account those properties that the object has in its prototype.
 * @param { object } obj
 * @param { boolean } ignoreChain
 * @return { [*] }
 */
function pairs(obj) {
  var ignoreChain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var thePairs = [];

  for (var key in obj) {
    if (ignoreChain || hop(obj, key)) {
      thePairs.push([key, obj[key]]);
    }
  }

  return thePairs;
}

// Implement from pairs

exports.invert = invert;
exports.keys = keys;
exports.values = values;
exports.pairs = pairs;

Object.defineProperty(exports, '__esModule', { value: true });

})));
