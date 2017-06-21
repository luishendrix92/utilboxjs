(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.B = global.B || {})));
}(this, (function (exports) { 'use strict';

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

exports.borrow = borrow;
exports.unMethod = unMethod;
exports.complement = complement;
exports.curry = curry;
exports.noop = noop;
exports.identity = identity;

Object.defineProperty(exports, '__esModule', { value: true });

})));
