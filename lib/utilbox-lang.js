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

exports.scanStr = scanStr;
exports.toggler = toggler;

Object.defineProperty(exports, '__esModule', { value: true });

})));
