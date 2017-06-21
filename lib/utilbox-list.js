(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.B = global.B || {})));
}(this, (function (exports) { 'use strict';

// Implement an element counter

// TODO: implement cycle

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

// Implement extremes and middle

/**
 * Creates a new list that contains items from the original list that meet a certain criteria specified as a callback function.
 * @param { [*] } list
 * @param { function } predicate
 * @return { [*] }
 */
function filter(list, predicate) {
  var length = list.length;

  var filtered = [];
  var index = 0;
  var _index = 0;
  var item = void 0;

  while (index < length) {
    item = list[index];

    if (predicate(item, index, list)) {
      filtered[_index] = item;
      _index++;
    }

    index++;
  }

  return filtered;
}

// Implement compact (falsy values)

// implement frequencies

// Implement left and right halfs of lists

// TODO: Implement insertion at index for lists and strings

/**
 * Returns a new array after inserting a value of your choosing in between the elements the array you pass.
 * @param { * } inserted
 * @param { [*] } list
 * @return { [*] }
 */
function intersperse(inserted, list) {
  var len = list.length;
  var result = [];

  each(list, function (item, i) {
    i < len - 1 ? result.push(item, inserted) : result.push(item);
  });

  return result;
}

/**
 * A very generalized function for various iterable collections that tells you whether it's empty or not. UNSTABLE.
 * @param { [*] } collection
 * @return { boolean }
 */
function isEmpty(collection) {
  var len = collection.length;

  return len !== undefined ? len === 0 : collection === null || JSON.stringify(collection) === '{}';
}

console.log(isEmpty('d'));

// TODO: Implement iterate

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

/**
 * Returns a list of chunks of defined size, if the size of the list isn't evenly divisible by the chunk size, the last elements are included as well as a chunk of inferior size. You must supply a skip that defaults to 0, negative skips will repeat previous elements while positive skips will skil subsequent elements.
 * @param { number } chunkSize
 * @param { number } skip
 * @param { [*] } list
 * @return { [[*]] }
 */
function partition(chunkSize, skip, list) {
  var len = list.length;
  var partitioned = [];
  var nChunks = chunkSize ? Math.ceil(len / (chunkSize + skip)) : 0;
  var start = void 0,
      end = void 0;

  if (nChunks > 0) {
    for (var i = 0; i < nChunks; i += 1) {
      start = i > 0 ? i * (chunkSize + skip) : i;
      end = start + chunkSize;

      partitioned.push(list.slice(start, end));
    }
  }

  return partitioned;
}

// Implement separate, one that matches pred, other that doesn't

/**
 * Returns a random number in between an inclusive range of two numbers (they can be negative). If there's only one argument passed, the start is 0. A little caveat is that you can obtain a -0 if your only argument is a negative value.
 */
function random(a, b) {
  var start = b === undefined ? 0 : a;
  var end = b === undefined ? a < 0 ? -a : a : b;

  return Math.floor(Math.random() * (end - start + 1) + start) * (a < 0 && b === undefined ? -1 : 1);
}

/**
 * Selects a random element from anything with an index, if you pass an empty list you'll get undefined (so please, don't).
 * @param { [*] } list
 * @return { * }
 */
function randElem(list) {
  var maxIdx = list.length - 1;

  return maxIdx < 0 ? undefined : list[random(maxIdx)];
}

// Implement Sample

/**
 * Make an array with integers from 'a' to 'b' (inclusive) if 'a' is less than or equal to 'b', otherwise, a reverse range.
 * @param { number } a
 * @param { number } b
 * @return { [number] }
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
 * Parting from an identity or accumulator, iterates over an array to change the accumulator by using its values. If there's no accumulator, the first item of the array will be used.
 * @param { [*] } list 
 * @param { function } reducer 
 * @param { * } acc 
 * @return { * }
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
 * Takes a predicate function (one that returns a boolean) and returns another function that does the same but returns the flipped boolean value.
 * @param { function } predicate
 * @return { function }
 */
function complement(predicate) {
  return function opposite() {
    return !predicate.apply(this, arguments);
  };
}

/**
 * Same functionality of filter but instead returns the elements that don't fail the criteria; you can think of it as the complement function of filter.
 * @param { function } rejectionCriteria 
 * @param { [*] } candidates 
 * @return [*]
 */
function reject(rejectionCriteria, candidates) {
  return filter(candidates, complement(rejectionCriteria));
}

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/**
 * Reverses the order of any iterable with an index key, returning a copy instead of mutating in place.
 * @param { [*] } list
 * @return { [*] }
 */
function reverse(list) {
  var reversed = [].concat(toConsumableArray(list));
  var isString = typeof list === 'string';
  var len = list.length;
  var max = Math.floor(len / 2);
  var temp = void 0;

  if (len < 2) return isString ? list : reversed;

  for (var l = 0, r = len - 1; l < max; l += 1, r -= 1) {
    temp = reversed[l];
    reversed[l] = reversed[r];
    reversed[r] = temp;
  }

  return isString ? reversed.join('') : reversed;
}

/**
 * Returns the first element of anything with index, idiomatically as the head of the list.
 * @param { [*] } list
 * @return { * }
 */
function head(list) {
  return list.length > 0 ? list[0] : typeof list === 'string' ? '' : undefined;
}

/**
 * Returns all the elements but the first items of anything with index, idiomatically as the tail of a list.
 * @param { [*] } list
 * @return { [*] }
 */
function tail(list) {
  return list.slice(1);
}

/**
 * Returns all but the last items of anything with index, idiomatically as the initial portion of a list.
 * @param { [*] } list
 * @return { [*] }
 */
function init(list) {
  var len = list.length;

  return list.slice(0, len - 1);
}

/**
 * Returns the very last item of any collection with index.
 * @param { [*] } list
 * @return { * }
 */
function last(list) {
  var len = list.length;

  return list.length > 0 ? list[len - 1] : typeof list === 'string' ? '' : undefined;
}

/**
 * Shunting-Yard algorithm applied to a copy of the 
 * @param { [*] } list
 * @return { [*] }
 */
function shuffle(list) {
  var copy = [].concat(toConsumableArray(list));

  // TO-DO Implement
}

// Implement all forms of Take

// TODO : Implement Zip and Unzip

exports.each = each;
exports.filter = filter;
exports.intersperse = intersperse;
exports.isEmpty = isEmpty;
exports.map = map;
exports.partition = partition;
exports.randElem = randElem;
exports.range = range;
exports.reduce = reduce;
exports.reject = reject;
exports.reverse = reverse;
exports.head = head;
exports.tail = tail;
exports.init = init;
exports.last = last;
exports.shuffle = shuffle;

Object.defineProperty(exports, '__esModule', { value: true });

})));
