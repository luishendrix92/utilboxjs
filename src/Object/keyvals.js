import { hop } from '../constants'

/**
 * Returns an object's own keys as an array of strings. It uses a for-in loop in the back in combination with hasOwnProperty.
 * @param { object } obj
 * @return { [string] }
 */
export function keys(obj) {
  const objKeys = []

  for (var key in obj) {
    if (hop(obj, key)) {
      objKeys.push(key)
    }
  }

  return objKeys
}

/**
 * Returns an object's own values as an array. It uses a for-in loop in the back in combination with hasOwnProperty.
 * @param { object } obj
 * @return { [*] }
 */
export function values(obj) {
  const objValues = []

  for (var key in obj) {
    if (hop(obj, key)) {
      objValues.push(obj[key])
    }
  }

  return objValues
}