/**
 * Repeat a string n times recursively and then returns the result
 * @param { string } str
 * @param { int } repeats [with default]
 * @param { repeated } the repeated string [tail-call, with default]
 * @return { string }
 */

export function repeat(str, repeats = 1, repeated = '') {
  if (!repeats
      || typeof repeats !== 'number'
      || repeats < 0) return repeated

  return repeat(str, repeats - 1, repeated + str)
}


/**
 * Typical string padding from the length and the right up to
 * a certain character limit, filling with a certain char.
 * @param { string } str
 * @param { int } max
 * @param { string } fill [optional, with default]
 * @return { string }
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

/**
 * Reverses a string.
 * @param { string } str
 * @return { string }
 */

export function reverse(str){
  // TODO : check this later, for variable type
  // if(typeof str !== 'string') throw new Error(`"${str}" is not a String.`)
  let i = str.length - 1
  let newStr = ''
  for( ; i >= 0; i--){
    newStr += str[i]
  }

  return newStr
}
