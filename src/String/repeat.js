import { SAFE_CALLSTACK } from '../constants'

/**
 * Repeat a string n times recursively and then returns the result.
 * Notice that this function is of recursive nature.
 *
 * @param str      :: String
 * @param repeats  :: Int    [default -> 1]
 * @param repeated :: String [default -> '']
 *
 * @return         :: String
 */

export function repeat(str, repeats = 1, repeated = '') {
  if (!repeats
      || typeof repeats !== 'number'
      || repeats < 0
      || repeats > SAFE_CALLSTACK) return repeated

  return repeat(str, repeats - 1, repeated + str)
}