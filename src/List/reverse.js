/**
 * Reverses the order of any iterable with an index key, returning a copy instead of mutating in place.
 * @param { [*] } list
 * @return { [*] }
 */
export function reverse(list) {
  const reversed = [...list]
  const isString = typeof list === 'string'
  const len = list.length
  const max = Math.floor(len / 2)
  let temp

  if (len < 2) return isString ? list : reversed

  for (let l = 0, r = len - 1; l < max; l += 1, r -= 1) {
    temp = reversed[l]
    reversed[l] = reversed[r]
    reversed[r] = temp
  }

  return isString ? reversed.join('') : reversed
}