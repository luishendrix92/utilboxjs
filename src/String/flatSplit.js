/**
 * Performs splits on some text from the outside-in using a set of provided splitters.
 * @param { [string]|[RegExp] } splitters
 * @param { string } text
 * @return { [string] }
 */
export function flatSplit(splitters, text) {
  const [head, ...tail] = splitters

  return text
    .split(head)
    .map(row => splitters.length
      ? flatSplit(tail, row)
      : row)
}