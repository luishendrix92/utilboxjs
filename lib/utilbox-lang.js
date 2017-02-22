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

exports.scanStr = scanStr;
exports.toggler = toggler;

Object.defineProperty(exports, '__esModule', { value: true });

})));
