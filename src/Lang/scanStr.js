/**
 * In other programming languages, there's a RegExp method called 'scan'
 * that behaves like RegExp.match() but it plays nicely with capture
 * groups. Using RegExp.exec() behind the scenes with a global safeguard.
 *
 * NOTE: This function needs a global RegExp flag, and adds it if absent.
 *
 * @param str     :: String
 * @param pattern :: RegExp
 *
 * @return        :: [[String]]
 */

export function scanStr(str, pattern) {
  let result = []
  let match
  
  pattern = !pattern.global
    ? new RegExp(pattern, pattern.flags + 'g')
    : pattern
  
  while (match = pattern.exec(str))
    result.push(match)
  
  return result
}