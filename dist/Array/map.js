"use strict";

/**
 * Transforms an array into a new array after transforming the
 * elements inside it with a callback function.
 * @param { array } list
 * @param { function } transform
 * @return { array }
 */

module.exports = function map(list, transform) {
  var length = list.length;
  var transformed = Array(length);
  var index = 0;

  while (index < length) {
    var item = list[index];

    transformed[index] = transform(item, index, list);
    index++;
  }

  return transformed;
};