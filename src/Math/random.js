/**
 * Returns a random number in between an inclusive range of two numbers (they can be negative). If there's only one argument passed, the start is 0. A little caveat is that you can obtain a -0 if your only argument is a negative value.
 */
export function random(a, b) {
  const start = b === undefined ? 0 : a
  const end = b === undefined ? (a < 0 ? -a : a) : b

  return Math.floor(
    Math.random() *
    (end - start + 1) +
    start
  ) * (a < 0 && b === undefined ? -1 : 1)
}