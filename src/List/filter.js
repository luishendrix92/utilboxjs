/**
 * Creates a new list that contains items from the original list that meet a certain criteria specified as a callback function.
 * @param { [*] } list
 * @param { function } predicate
 * @return { [*] }
 */
export function filter(list, predicate) {
  const { length } = list
  const filtered = []
  let index = 0
  let _index = 0
  let item
  
  while (index < length) {
    item = list[index]
    
    if (predicate(item, index, list)) {
      filtered[_index] = item
      _index++
    }
    
    index++
  }
  
  return filtered
}

// Implement compact (falsy values)