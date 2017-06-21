import { hop } from '../constants'

/**
 * Converts an object literal into a list of key-value pairs. By default, it doesn't take in account those properties that the object has in its prototype.
 * @param { object } obj
 * @param { boolean } ignoreChain
 * @return { [*] }
 */
export function pairs(obj, ignoreChain = true) {
  let thePairs = []

  for (let key in obj) {
    if (ignoreChain || hop(obj, key)) {
      thePairs.push([key, obj[key]])
    }
  }

  return thePairs
}

// Implement from pairs