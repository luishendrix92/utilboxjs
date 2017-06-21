/**
 * Takes a predicate function (one that returns a boolean) and returns another function that does the same but returns the flipped boolean value.
 * @param { function } predicate
 * @return { function }
 */
export function complement(predicate) {
  return function opposite() {
    return !predicate.apply(this, arguments)
  }
}