import { reduce, reverse } from '../List/index'

/**
 * Makes function composition in reverse order (from left to right), follows the order of execution in which you pass the functions.
 * @param { ...function } functions
 * @return { function }
 */
export function pipe(...functions) {
  return function pipleine() {
    return reduce(
      functions.slice(1),
      function(x, f) {
        return f.call(this, x)
      },
      functions[0](...arguments)
    )
  }
}

/**
 * Performs function composition as stated in mathematics: the functions get evaluated from right to left. Meaning that if you compose f and g in that order, the execution after passing x to (f ∘ g) would be f(g(x)). The first function to be executed can have multiple arity but subsequent functions MUST have an arity of 1.
 * @param { ...function }
 * @return { function }
 */
export function compose(...functions) {
  return pipe.apply(this, reverse(functions))
}