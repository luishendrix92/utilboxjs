(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.B = global.B || {})));
}(this, (function (exports) { 'use strict';

// TODO: Implement a from i to n as repeatedly

// TODO: implement repeatedly with index

/**
 * Behaves like RegExp.match() but it plays nicely with capture groups, using RegExp.exec() behind the scenes with a global safeguard. UNSTABLE.
 * @param { string } str
 * @param { RegExp } pattern
 * @return { [[string]] }
 */
function scanStr(str, pattern) {
  var result = [];
  var match = void 0;

  pattern = !pattern.global ? new RegExp(pattern, pattern.flags + 'g') : pattern;

  while (match = pattern.exec(str)) {
    result.push(match);
  }return result;
}

/**
 * You give it two values that need to be in constant alternation and returns a function that, when executed, returns either values.
 * @param { * } left
 * @param { * } right
 * @return { function }
 */
function toggler(left) {
  var right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : left;

  var side = true;

  return function () {
    side = !side;

    return side ? right : left;
  };
}

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

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







































var toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

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

// Carry around arguments to apply to a function

/**
 * Borrows a method from an object prototype and turns it into a function that can be called with a new context as its first argument; subsequent arguments will be treated as the arguments you'd normally pass to the method.
 * @param { function } protoMethod
 * @return { function }
 */
function borrow(protoMethod) {
  return function (context) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return protoMethod.apply(context, args);
  };
}

/**
 * Borrows a method from an object prototype and turns it into a partially applied function (arguments go after the method) that accepts a context and applies the previously passed arguments.
 * @param { function } protoMethod
 * @return { function }
 */
function unMethod(protoMethod) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return function (context) {
    return protoMethod.apply(context, args);
  };
}

// Implement converge

/**
 * Handles the autocurrying of a function so that its arguments can be partially applied up until the last parameter accepted.
 * @param { function } originalFunction
 * @return { function }
 */
function curry(originalFunction) {
  var nParams = originalFunction.length;

  return function outer() {
    for (var _len = arguments.length, outerArgs = Array(_len), _key = 0; _key < _len; _key++) {
      outerArgs[_key] = arguments[_key];
    }

    if (outerArgs.length >= nParams) {
      return originalFunction.apply(this, outerArgs);
    } else {
      return function inner() {
        for (var _len2 = arguments.length, innerArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          innerArgs[_key2] = arguments[_key2];
        }

        return outer.apply(this, outerArgs.concat(innerArgs));
      };
    }
  };
}

// implement debounce and throttle

// TODO: Implement reverse order of functions

/**
 * This function takes no arguments and does nothing (returns undefined), useful for optional callbacks.
 * @return { undefined }
 */
function noop() {
  return undefined; // Explicitly stated
}

// TODO: implement Constant

/**
 * Returns the first argument that you pass to it.
 * @param { * } onlyArgument
 * @return { * }
 */
function identity(onlyArgument) {
  return onlyArgument;
}

// Implement juxt

// Implement _.before and _.after some times

// implement memoization

// Ipmlement once function execution

/**
 * Extremely unstable and experimental function to protect unwanted results from the execution of a function. It calls a function and catches any exception that may occur while also guards you from null and undefined return values. You need to provide a default value to substitute the return and please don't blame me from any unwanted effect. Note that if you pass a function as the default, it will receive the name of the error, null or undefined; whatever this function returns will be the eventual returned value of the safeguarded function.
 * @param { function } f,
 * @param { * } fallback
 */


// TODO: Change to a defaulkts

// Implement trampoline recursion

// Implement wrap

// [a, b] / n

// Basic circular-circular and rectangular-rectangular collision; wall collision as well

// Implement digits: 123 -> [1,2,3] | 023 -> [0,2,3]

/**
 * Distance between two points (x, y) using the pythagorean theorem. Beware floating point precision.
 * @param { [number] } p1
 * @param  { [number] } p2
 * @return { number }
 */
function distance(p1, p2) {
  if (arguments.length === 4) {
    p1 = [arguments[0], arguments[1]];
    p2 = [arguments[2], arguments[3]];
  }

  return Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));
}

// implement is even or odd

// implement factorial

// Fps to Ms and vicesversa

// Implement hypoenuse with two catets

// TODO: Implement => inc, dec

/**
 * Tells you whether a number is inside an open or closed interval range.
 * @param { number } n
 * @param { number } a
 * @param { number } b
 * @param { boolean } lClosed
 * @param { boolean } rClosed
 * @return { boolean }
 */
function inRange(n, a, b) {
  var lClosed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var rClosed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

  var temp = a;
  a = a > b ? b : a;
  b = temp > b ? temp : b;

  if (lClosed && rClosed) {
    return n >= a && n <= b;
  } else if (!lClosed && rClosed) {
    return n > a && n <= b;
  } else if (lClosed && !rClosed) {
    return n >= a && n < b;
  } else if (!lClosed && !rClosed) {
    return n > a && n < b;
  } else {
    return false;
  }
}

// Implement product of list

// Implement quotient

// Roman numeral conversion

/**
 * Converts an interval to another and pinpoints the equivalency of a number
 * @param { number } a1
 * @param { number } b1
 * @param { number } a2
 * @param { number } b2
 * @param { number } num
 * @return { number }
 */
function scale(a1, b1, a2, b2, num) {
  return a1 + (num - a2) / (b2 - a2) * (b1 - a1);
}

/* Algorithm semantics
*  --------------------
*  The equivalency of N from the scaled interval in the original interval
*  is equal to the left side of the original interval plus the distance
*  between the original interval times the percentage; and this percentage
*  is obtained by computing the distance between the number and the
*  left side of the scaled interval.                                    */

// -1 1

// Median, Average etc

// Implement the sum and average of a list

// Implement decimal to fraction

var SAFE_CALLSTACK = 11034;
var wordPattern = /[a-zA-Z0-9\-_']+/g;

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

// Implementation of ASCII Functions: ord, char, codepoints, fromCodes, shift, fromBinary

// TODO: Implement Capitalize

/*
Implement center:
"hello".center(4)         #=> "hello"
"hello".center(20)        #=> "       hello        "
"hello".center(20, '123') #=> "1231231hello12312312"
*/

// implement: isAphaNum, isAlpha, isWhitespace

// Trim extra whitespace on all ends

// Implement toCamel, toSnake, toKebab, toPascal

// Endswith startswith

// Implement HTML escaping and unescaping

// Multiform extraction

// Implement file format

/**
 * Performs splits on some text from the outside-in using a set of provided splitters.
 * @param { [string]|[RegExp] } splitters
 * @param { string } text
 * @return { [string] }
 */
function flatSplit(splitters, text) {
  var _splitters = toArray(splitters),
      head = _splitters[0],
      tail = _splitters.slice(1);

  return text.split(head).map(function (row) {
    return splitters.length ? flatSplit(tail, row) : row;
  });
}

// Implement a flipping case function

/**
 * Turns a string into a list of lines using a rather simple split by newline character; it's a composable and idiomatic version of .split('\n').
 * @param { string } text
 * @return { [string] }
 */
function lines(text) {
  return text.split('\n');
}

/**
 * From a list of lines, constructs a single string after joining them with a newline character; it's a composable and idiomatic version of .join('\n').
 * @param { [string] } strLines
 * @return { string }
 */
function unlines(strLines) {
  return strLines.join(' ');
}

// TODO: Implement mirror that also works on lists

/**
 * Recursively repeats a string N times. It may blow up your callstack if no tail-call optimization is avaiable in the JavaScript engine.
 * @param { string } str
 * @param { number } repeats 
 * @param { string } repeated
 * @return { string }
 */
function repeat(str) {
  var repeats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var repeated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (!repeats || typeof repeats !== 'number' || repeats < 0 || repeats > SAFE_CALLSTACK) return repeated;

  return repeat(str, repeats - 1, repeated + str);
}

/**
 * Typical left padding from the length up to a certain character limit, filling with a certain char.
 * @param { string } str
 * @param { number } max
 * @param { string } fill
 * @return { string }
 */
function padStart(str, max) {
  var fill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

  var strLen = str.length;

  if (max < strLen) return str;

  return repeat(fill, Math.ceil((max - strLen) / fill.length)).slice(0, max - strLen) + str;
}

/**
 * Typical right padding from the length up to a certain character limit, filling with a certain char.
 * @param { string } str
 * @param { number } max
 * @param { string } fill
 * @return { string }
 */
function padEnd(str, max) {
  var fill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

  var strLen = str.length;

  if (max < strLen) return str;

  return str + repeat(fill, Math.ceil((max - strLen) / fill.length)).slice(0, max - strLen);
}

// Truncate with ... at a certain length

// String template %i and %(varname) with object

// Implement Haskell's subsequences

// add a string to both ends

// Implement title case

/**
 * Turns a string into a list of words using a rather simple split by space character. By setting the optional argument to True, the function will use a RegExp to match words but be careful, it may be inefficient in a large or dangerously crafted piece of text.
 * @param { string } text
 * @param { boolean } useRegex
 * @return { [string] }
 */
function words(text) {
  var useRegex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return useRegex ? text.match(wordPattern) || [] : text.split(' ');
}

/**
 * From a list of strings, constructs a single string after joining them with a space character; it's a composable and idiomatic version of .join(' ').
 * @param { [string] } words
 * @return { string }
 */
function unwords(words) {
  return words.join(' ');
}

/**
 * Dead simple queue data structure of type "FIFO" where the first item that was added, is the first one that will go out.
 */
var Queue = function () {
  /**
   * Creates the empty array for the queue to work.
   */
  function Queue() {
    classCallCheck(this, Queue);

    this._queue = [];
  }

  /**
   * Sends data to the start of the queue array.
   * @param { * } data 
   * @return { Queue }
   */


  createClass(Queue, [{
    key: "enqueue",
    value: function enqueue(data) {
      this._queue.unshift(data);

      return this;
    }

    /**
     * Returns and deletes the last element of the queue array.
     * @return { * }
     */

  }, {
    key: "dequeue",
    value: function dequeue() {
      return this._queue.pop();
    }

    /**
     * Returns the last element of the queue array without deleting it.
     * @return { * }
     */

  }, {
    key: "peek",
    value: function peek() {
      return this._queue[this._queue.length - 1];
    }

    /**
     * Sets the queue array back to beign empty, removing everything inside it.
     * @return { Queue }
     */

  }, {
    key: "clear",
    value: function clear() {
      this._queue = [];

      return this;
    }
  }]);
  return Queue;
}();

/*
 * Not implemented yet
 */
var LinkedList = function LinkedList() {
  classCallCheck(this, LinkedList);
};

// TODO: Implement Uniq and Uniq By

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

/**
 * @license
 * MIT License
 * Copyright (c) 2017 Luis Felipe López Garay
 * Utilbox.js v0.1.4 at https://codetuts.tech/utilboxjs
 */

exports.scanStr = scanStr;
exports.toggler = toggler;
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
exports.borrow = borrow;
exports.unMethod = unMethod;
exports.complement = complement;
exports.curry = curry;
exports.noop = noop;
exports.identity = identity;
exports.distance = distance;
exports.inRange = inRange;
exports.random = random;
exports.scale = scale;
exports.invert = invert;
exports.keys = keys;
exports.values = values;
exports.pairs = pairs;
exports.flatSplit = flatSplit;
exports.lines = lines;
exports.unlines = unlines;
exports.padStart = padStart;
exports.padEnd = padEnd;
exports.repeat = repeat;
exports.words = words;
exports.unwords = unwords;
exports.Queue = Queue;
exports.LinkedList = LinkedList;
exports.flatJoin = flatJoin;
exports.listComp = listComp;
exports.transpose = transpose;

Object.defineProperty(exports, '__esModule', { value: true });

})));
