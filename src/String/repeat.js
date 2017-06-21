import { SAFE_CALLSTACK } from '../constants'

/**
 * Recursively repeats a string N times. It may blow up your callstack if no tail-call optimization is avaiable in the JavaScript engine.
 * @param { string } str
 * @param { number } repeats 
 * @param { string } repeated
 * @return { string }
 */
export function repeat(str, repeats = 1, repeated = '') {
  if (!repeats
      || typeof repeats !== 'number'
      || repeats < 0
      || repeats > SAFE_CALLSTACK) return repeated

  return repeat(str, repeats - 1, repeated + str)
}