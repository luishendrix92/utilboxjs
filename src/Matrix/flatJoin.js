import { map } from '../List/map'

/**
 * Joins a multidimensional array from the inside-out using a set of provided joiners.
 * @param { [string] } joints
 * @param { [*] } list
 * @return { string }
 */
export function flatJoin(joints, list) {
  const [head, ...tail] = joints
  
  return (
    tail.length
      ? map(list, level => flatJoin(tail, level))
      : list
  ).join(head)
}