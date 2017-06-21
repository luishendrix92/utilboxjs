import { repeat } from './repeat'

/**
 * Typical left padding from the length up to a certain character limit, filling with a certain char.
 * @param { string } str
 * @param { number } max
 * @param { string } fill
 * @return { string }
 */
export function padStart(str, max, fill = ' ') {
  let strLen = str.length
  
  if (max < strLen) return str

  return repeat(fill, Math.ceil((max - strLen) / fill.length))
    .slice(0, max - strLen) + str
}

/**
 * Typical right padding from the length up to a certain character limit, filling with a certain char.
 * @param { string } str
 * @param { number } max
 * @param { string } fill
 * @return { string }
 */
export function padEnd(str, max, fill = ' ') {
  let strLen = str.length
  
  if (max < strLen) return str

  return str + repeat(fill, Math.ceil((max - strLen) / fill.length))
    .slice(0, max - strLen)
}