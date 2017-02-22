/*
 * Dead simple queue data structure of type "FIFO" where the first
 * item that was added, is the first one that will go out.
 *
 * @field queue :: Array
 */

export class Queue {
  _queue = []
  
  enqueue(data) {
    this._queue.unshift(data)
    
    return this._queue
  }
  
  dequeue() {
    return this._queue.pop()
  }
  
  peek() {
    return this._queue[this._queue.length - 1]
  }
  
  clear() {
    this._queue = []
  }
}