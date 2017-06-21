/**
 * Transforms the elements inside an array with a callback function.
 * @param { [*] } list
 * @param { function } transform
 * @return { [*] }
 */
export function map(list, transform) {
  const { length } = list
  const transformed = Array(length)
  let index = 0
  let item
  
  while (index < length) {
    item = list[index]
    
    transformed[index] = transform(item, index, list)
    index++
  }
  
  return transformed
}

// TODO: Implement mapcat