(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.B = global.B || {})));
}(this, (function (exports) { 'use strict';

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

exports.Queue = Queue;
exports.LinkedList = LinkedList;

Object.defineProperty(exports, '__esModule', { value: true });

})));
