/**
 * Dead simple queue data structure of type "FIFO" where the first item that was added, is the first one that will go out.
 */
export class Queue {
  /**
   * Creates the empty array for the queue to work.
   */
  constructor() {
    this._queue = []
  }
  
  /**
   * Sends data to the start of the queue array.
   * @param { * } data 
   * @return { Queue }
   */
  enqueue(data) {
    this._queue.unshift(data)
    
    return this
  }
  
  /**
   * Returns and deletes the last element of the queue array.
   * @return { * }
   */
  dequeue() {
    return this._queue.pop()
  }
  
  /**
   * Returns the last element of the queue array without deleting it.
   * @return { * }
   */
  peek() {
    return this._queue[this._queue.length - 1]
  }
  
  /**
   * Sets the queue array back to beign empty, removing everything inside it.
   * @return { Queue }
   */
  clear() {
    this._queue = []

    return this
  }
}