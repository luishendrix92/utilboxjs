import { each } from './each'

/**
 * Returns a new array after inserting a value of your choosing in between the elements the array you pass.
 * @param { * } inserted
 * @param { [*] } list
 * @return { [*] }
 */
export function intersperse(inserted, list) {
  const len = list.length
  const result = []

  each(list, function(item, i) {
    i < len - 1
      ? result.push(item, inserted)
      : result.push(item)
  })

  return result
}