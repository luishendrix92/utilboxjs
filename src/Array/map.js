/**
 * Transforms an array into a new array after transforming the
 * elements inside it with a callback function.
 * @param { array } list
 * @param { function } transform
 * @return { array }
 */
 
export default function map(list, transform) {
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