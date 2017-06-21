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

exports.Queue = Queue;
exports.LinkedList = LinkedList;

Object.defineProperty(exports, '__esModule', { value: true });

})));
