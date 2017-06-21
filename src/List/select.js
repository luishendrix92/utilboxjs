/**
 * Returns the first element of anything with index, idiomatically as the head of the list.
 * @param { [*] } list
 * @return { * }
 */
export function head(list) {
  return list.length > 0
    ? list[0]
    : typeof list === 'string'
      ? ''
      : undefined
}

/**
 * Returns all the elements but the first items of anything with index, idiomatically as the tail of a list.
 * @param { [*] } list
 * @return { [*] }
 */
export function tail(list) {
  return list.slice(1)
}

/**
 * Returns all but the last items of anything with index, idiomatically as the initial portion of a list.
 * @param { [*] } list
 * @return { [*] }
 */
export function init(list) {
  const len = list.length

  return list.slice(0, len - 1)
}

/**
 * Returns the very last item of any collection with index.
 * @param { [*] } list
 * @return { * }
 */
export function last(list) {
  const len = list.length

  return list.length > 0
    ? list[len - 1]
    : typeof list === 'string'
      ? ''
      : undefined
}