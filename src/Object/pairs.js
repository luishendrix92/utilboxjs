import { hop } from '../constants'

/**
 * Converts an object literal into an jagged array of key-value tuples.
 * By default, it takes in account those enumerable properties that
 * the object has in its prototype; change to 'false' and they
 * will be excluding, leaving only 'own' properties.
 *
 * @param obj       :: Object
 * @param inherited :: Boolean [default -> true]
 *
 * @return          :: [Array]
 */

export function pairs(obj, inherited = true) {
  let pairs = []
  
  for (let key in obj) {
    if (inherited || hop(obj, key)) {
      pairs.push([key, obj[key]])
    }
  }
  
  return pairs
}