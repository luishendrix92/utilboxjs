/**
 * Iterates over the given list and pass each item to a function that does some side-effects with it.
 * @param { [*] } list
 * @param { function } action
 * @return  { [*] }
 */
export function each(list, action) {
  let { length } = list
  let index = 0
  
  while (index < length) {
    action(list[index], index, list)
    
    index++
  }
  
  return list
}