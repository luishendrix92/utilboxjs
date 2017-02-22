/**
 * Reverses a string by returning a reversed copy of it
 *
 * @param  str :: String
 *
 * @return     :: String
 */

export function reverse(str) {
  if (typeof str !== 'string') return str
  
  let reversed = ''
  
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversed += str[i]
  }

  return reversed
}