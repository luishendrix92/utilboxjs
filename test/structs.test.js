const _ = require('../lib/utilbox.js')

describe('Queue data structure', () => {
  let queue = new _.Queue()
  queue.enqueue(5)
  queue.enqueue(6)
  queue.enqueue(7)
  
  test('[Queue] Enqueues in the correct order', () => {
    queue.enqueue(8)
    
    expect(queue._queue[0]).toBe(8)
    expect(queue._queue.length).toBe(4)
  })
  
  test('[Queue] Dequeues the front item by removing and returning it', () => {
    expect(queue.dequeue()).toBe(5)
    expect(queue._queue.length).toBe(3)
  })
  
  test('[Queue] Can peek into the front item without returning it', () => {
    expect(queue._queue[queue._queue.length - 1]).toBe(6)
  })
  
  test('[Queue] Must be able to clear the whole queue', () => {
    queue.clear()
    
    expect(queue.dequeue()).toBeUndefined()
    expect(queue._queue.length).toBe(0)
  })
})