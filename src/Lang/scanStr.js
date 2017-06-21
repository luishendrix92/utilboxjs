/**
 * Behaves like RegExp.match() but it plays nicely with capture groups, using RegExp.exec() behind the scenes with a global safeguard. UNSTABLE.
 * @param { string } str
 * @param { RegExp } pattern
 * @return { [[string]] }
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