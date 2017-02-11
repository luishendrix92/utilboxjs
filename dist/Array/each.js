"use strict";

/**
 * Iterates over the given list with an side-effect
 * @param { array } list
 * @param { function } action
 * @return { array }
 */

module.exports = function each(list, action) {
  var length = list.length;
  var index = 0;

  while (index < length) {
    action(list[index], index, list);

    index++;
  }

  return list;
};