/*
 * You give it two values that need to be in constant alternation and
 * returns a function that, when executed (no parameters), returns
 * either of the two values that you passed, like a switch, ON, OFF.
 *
 * @param left  :: Object|Primitive
 * @param right :: Object|Primitive
 *
 * @return      :: Function
 */
 
export function toggler(left, right = left) {
  let side = 1 // 0 is left (false) and 1 is right (true)
  
  return function() {
    side = !side
    
    return side
      ? right
      : left
  }
}