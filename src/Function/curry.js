/**
 * Handles the autocurrying of a function so that its arguments can be partially applied up until the last parameter accepted.
 * @param { function } originalFunction
 * @return { function }
 */
export function curry(originalFunction) {
  const nParams = originalFunction.length

  return function outer(...outerArgs) {
    if (outerArgs.length >= nParams) {
      return originalFunction.apply(this, outerArgs)
    } else {
      return function inner(...innerArgs) {
        return outer.apply(this, outerArgs.concat(innerArgs))
      }
    }
  }
}