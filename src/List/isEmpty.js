/**
 * A very generalized function for various iterable collections that tells you whether it's empty or not. UNSTABLE.
 * @param { [*] } collection
 * @return { boolean }
 */
export function isEmpty(collection) {
  const len = collection.length

  return len !== undefined
    ? len === 0
    : collection === null ||
      JSON.stringify(collection) === '{}'
}

console.log(
  isEmpty('d')
)