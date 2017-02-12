/**
 * Repeat a string n recursively and return it
 * @param { string } str
 * @param { int } repeats [with default]
 * @param { repeated } the repeated string [tail-call, with default]
 * @return { string }
 */

export function repeat(str, repeats = 1, repeated = '') {
  if (repeats === Infinity || repeats < 1 || !repeats) return repeated
  
  return repeat(str, repeats - 1, repeated + str)
}