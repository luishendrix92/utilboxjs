import { each } from '../List/each'
import { hop } from '../constants'

/**
 * Inverts an object by turning its keys into values and its values into keys. This function mutates the object in place so be careful; also, it's based on JSON.stringify() which means, if you have reference values, it will turn them into their string representation as keys. It's also preferred that there are no duplicate values or strange things will happen.
 * @param { object } source
 * @return { object }
 */
export function invert(source) {
  const reviewed = []
  let newKey, currVal

  for (let key in source) {
    if (hop(source, key)) {
      currVal = source[key]
      newKey = typeof currVal === 'string'
        ? currVal
        : JSON.stringify(source[key])

      source[newKey] = key
      reviewed.push(key)
    }
  }

  each(reviewed, (reviewedKey) => delete source[reviewedKey])

  return source
}