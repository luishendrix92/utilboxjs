/**
 * Iterates over the given list with an side-effect
 * @param { array } list
 * @param { function } action
 * @return { array }
 */
 
export default function each(list, action) {
  let length = list.length
  let index = 0
  
  while (index < length) {
    action(list[index], index, list)
    
    index++
  }
  
  return list
}