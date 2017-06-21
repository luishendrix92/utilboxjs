/**
 * You give it two values that need to be in constant alternation and returns a function that, when executed, returns either values.
 * @param { * } left
 * @param { * } right
 * @return { function }
 */
export function toggler(left, right = left) {
  let side = true

  return function() {
    side = !side

    return side ? right : left
  }
}