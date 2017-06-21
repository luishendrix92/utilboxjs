/**
 * Parting from an identity or accumulator, iterates over an array to change the accumulator by using its values. If there's no accumulator, the first item of the array will be used.
 * @param { [*] } list 
 * @param { function } reducer 
 * @param { * } acc 
 * @return { * }
 */
export function reduce(list, reducer, acc) {
  let { length } = list

  if (!length) return (acc || null)
  
  let result = acc !== undefined? acc : list[0]
  let i = acc !== undefined? 0 : 1
  
  while (i < length) {
    result = reducer(result, list[i], i, list)
    
    i += 1
  }
  
  return result
}