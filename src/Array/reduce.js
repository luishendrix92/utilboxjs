/**
 * Parting from an accumulator, iterates over an array to change the
 * accumulator by using the provided values from the array.
 * If there's no accumulator, the first item will be used.
 *
 * @param list    :: Array
 * @param reducer :: Function
 * @param acc     :: Object|Primitive [optional]
 *
 * @return        :: Object|Primitive
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