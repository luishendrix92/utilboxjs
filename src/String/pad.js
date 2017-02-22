import { repeat } from './repeat'

/**
 * Typical string padding from the length and the right up to
 * a certain character limit, filling with a certain char.
 *
 * @param  str  :: String
 * @param  max  :: Int
 * @param  fill :: String [default -> ' ']
 *
 * @return      :: String
 */

export function padStart(str, max, fill = ' ') {
  let strLen = str.length
  
  if (max < strLen) return str

  return repeat(fill, Math.ceil((max - strLen) / fill.length))
    .slice(0, max - strLen) + str
}

export function padEnd(str, max, fill = ' ') {
  let strLen = str.length
  
  if (max < strLen) return str

  return str + repeat(fill, Math.ceil((max - strLen) / fill.length))
    .slice(0, max - strLen)
}