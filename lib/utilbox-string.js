(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.B = global.B || {})));
}(this, (function (exports) { 'use strict';

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

var toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

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

/**
 * Reverses the order of any iterable with an index key, returning a copy instead of mutating in place.
 * @param { [*] } list
 * @return { [*] }
 */

// TODO: Implement mirror that also works on lists

var SAFE_CALLSTACK = 11034;
var wordPattern = /[a-zA-Z0-9\-_']+/g;

/**
 * Composable proxy for hasOwnProperty
 * @private
 * @param { object } obj 
 * @param { string } prop 
 * @return { boolean }
 */

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

exports.flatSplit = flatSplit;
exports.lines = lines;
exports.unlines = unlines;
exports.padStart = padStart;
exports.padEnd = padEnd;
exports.repeat = repeat;
exports.words = words;
exports.unwords = unwords;

Object.defineProperty(exports, '__esModule', { value: true });

})));
