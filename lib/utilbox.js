(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.B = global.B || {})));
}(this, (function (exports) { 'use strict';

/**
 * In other programming languages, there's a RegExp method called 'scan'
 * that behaves like RegExp.match() but it plays nicely with capture
 * groups. Using RegExp.exec() behind the scenes with a global safeguard.
 *
 * NOTE: This function needs a global RegExp flag, and adds it if absent.
 *
 * @param str     :: String
 * @param pattern :: RegExp
 *
 * @return        :: [[String]]
 */

function scanStr(str, pattern) {
  var result = [];
  var match = void 0;

  pattern = !pattern.global ? new RegExp(pattern, pattern.flags + 'g') : pattern;

  while (match = pattern.exec(str)) {
    result.push(match);
  }return result;
}

/*
 * You give it two values that need to be in constant alternation and
 * returns a function that, when executed (no parameters), returns
 * either of the two values that you passed, like a switch, ON, OFF.
 *
 * @param left  :: Object|Primitive
 * @param right :: Object|Primitive
 *
 * @return      :: Function
 */

function toggler(left) {
  var right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : left;

  var side = 1; // 0 is left (false) and 1 is right (true)

  return function () {
    side = !side;

    return side ? right : left;
  };
}

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

/**
 * Tells you whether 'n' is inside an open or closed interval range
 *
 * @param n       :: Float
 * @param a       :: Float
 * @param b       :: Float
 * @param lClosed :: Boolean [default -> true]
 * @param rClosed :: Boolean [default -> true]
 
 * @return        :: Boolean
 */

function inRange(n, a, b) {
  var lClosed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var rClosed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

  var temp = a;
  a = a > b ? b : a;
  b = temp > b ? temp : b;

  return lClosed && rClosed ? n >= a && n <= b : !lClosed && rClosed ? n > a && n <= b : lClosed && !rClosed ? n >= a && n < b : !lClosed && !rClosed ? n > a && n < b : false;
}

/**
 * Converts an interval to another and pinpoints the equivalency of a number
 *
 * @param a1  :: Float
 * @param b1  :: Float
 * @param a2  :: Float
 * @param b2  :: Float
 * @param num :: Float
 *
 * @return    :: Float
 *
 * Algorithm semantics
 * -------------------
 * 
 * The equivalency of n from the scaled interval in the original interval
 * is equal to the left side of the original interval plus the distance
 * between the original interval times the percentage; and this percentage
 * is obtained by computing the distance between the number and the
 * left side of the scaled interval.
 */

function scale(a1, b1, a2, b2, num) {
  return a1 + (num - a2) / (b2 - a2) * (b1 - a1);
}

/*
 * Distance between two points (x, y) using the pythagorean theorem
 *
 * @param a :: Point :: [float, float]
 * @param b :: Point :: [float, float]
 *
 * @return float
 */

function distance(a, b) {
  if (arguments.length === 4) {
    a = [arguments[0], arguments[1]];
    b = [arguments[2], arguments[3]];
  }

  return Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2));
}

var SAFE_CALLSTACK = 11034;

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

/**
 * Repeat a string n times recursively and then returns the result.
 * Notice that this function is of recursive nature.
 *
 * @param str      :: String
 * @param repeats  :: Int    [default -> 1]
 * @param repeated :: String [default -> '']
 *
 * @return         :: String
 */

function repeat(str) {
  var repeats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var repeated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (!repeats || typeof repeats !== 'number' || repeats < 0 || repeats > SAFE_CALLSTACK) return repeated;

  return repeat(str, repeats - 1, repeated + str);
}

/**
 * Typical string padding from the length and the right up to
 * a certain character limit, filling with a certain char.
 *
 * @param  str  :: String
 * @param  max  :: Int
 * @param  fill :: String [default -> ' ']
 *
 * @return      :: String
 */

function padStart(str, max) {
  var fill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

  var strLen = str.length;

  if (max < strLen) return str;

  return repeat(fill, Math.ceil((max - strLen) / fill.length)).slice(0, max - strLen) + str;
}

function padEnd(str, max) {
  var fill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

  var strLen = str.length;

  if (max < strLen) return str;

  return str + repeat(fill, Math.ceil((max - strLen) / fill.length)).slice(0, max - strLen);
}

/**
 * Reverses a string by returning a reversed copy of it
 *
 * @param  str :: String
 *
 * @return     :: String
 */

function reverse(str) {
  if (typeof str !== 'string') return str;

  var reversed = '';

  for (var i = str.length - 1; i >= 0; i -= 1) {
    reversed += str[i];
  }

  return reversed;
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

/*
 * Dead simple queue data structure of type "FIFO" where the first
 * item that was added, is the first one that will go out.
 *
 * @field queue :: Array
 */

var Queue = function () {
  function Queue() {
    classCallCheck(this, Queue);
    this._queue = [];
  }

  createClass(Queue, [{
    key: "enqueue",
    value: function enqueue(data) {
      this._queue.unshift(data);

      return this._queue;
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      return this._queue.pop();
    }
  }, {
    key: "peek",
    value: function peek() {
      return this._queue[this._queue.length - 1];
    }
  }, {
    key: "clear",
    value: function clear() {
      this._queue = [];
    }
  }]);
  return Queue;
}();

/*
 * Not implemented yet
 *
 * @field list :: Array
 */

var LinkedList = function LinkedList() {
  classCallCheck(this, LinkedList);
};

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
exports.map = map;
exports.range = range;
exports.reduce = reduce;
exports.listComp = listComp;
exports.pipe = pipe;
exports.inRange = inRange;
exports.scale = scale;
exports.distance = distance;
exports.pairs = pairs;
exports.padStart = padStart;
exports.padEnd = padEnd;
exports.repeat = repeat;
exports.reverse = reverse;
exports.Queue = Queue;
exports.LinkedList = LinkedList;

Object.defineProperty(exports, '__esModule', { value: true });

})));
