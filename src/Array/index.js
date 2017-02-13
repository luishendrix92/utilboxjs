/**
 * Iterates over the given list with an side-effect
 * @param { array } list
 * @param { function } action
 * @return { array }
 */
 
export function each(list, action) {
  let length = list.length
  let index = 0
  
  while (index < length) {
    action(list[index], index, list)
    
    index++
  }
  
  return list
}


/**
 * Creates a new list that contains items from the given list
 * that meet a certain criteria specified as a callback function.
 * @param { array } list
 * @param { function } spec
 * @return { array }
 */
 
export function filter(list, spec) {
  let length = list.length
  let filtered = []
  let index = 0
  let _index = 0
  
  while (index < length) {
    const item = list[index]
    
    if (spec(item, index, list)) {
      filtered[_index] = item
      _index++
    }
    
    index++
  }
  
  return filtered
}


/**
 * Transforms an array into a new array after transforming the
 * elements inside it with a callback function.
 * @param { array } list
 * @param { function } transform
 * @return { array }
 */
 
export function map(list, transform) {
  let length = list.length
  let transformed = Array(length)
  let index = 0
  
  while (index < length) {
    const item = list[index]
    
    transformed[index] = transform(item, index, list)
    index++
  }
  
  return transformed
}


/**
 * Make an array with integers from a to b (both inclusive)
 * @param { int } a
 * @param { int } b
 * @return { string }
 *
 * [NOTE] Perhaps I could handle reverse ranges...
 */

export function range(a, b) {
  let temp = a
  a = !b? 0 : (a > b? b : a)
  b = !b? temp : (temp > b? temp : b)

  let _range = Array((b - a) || 1)
  let i = 0
  
  while (a <= b) {
    _range[i] = a
    i += 1
    a++
  }
  
  return _range
}