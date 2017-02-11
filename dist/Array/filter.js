"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;
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