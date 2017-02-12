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