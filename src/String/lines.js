/**
 * Turns a string into a list of lines using a rather simple split by newline character; it's a composable and idiomatic version of .split('\n').
 * @param { string } text
 * @return { [string] }
 */
export function lines(text) {
  return text.split('\n')
}

/**
 * From a list of lines, constructs a single string after joining them with a newline character; it's a composable and idiomatic version of .join('\n').
 * @param { [string] } strLines
 * @return { string }
 */
export function unlines(strLines) {
  return strLines.join(' ')
}