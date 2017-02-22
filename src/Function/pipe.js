/**
 * Sends a value through a series of functions in the given order and
 * returns the result of this pipeline to the caller. This acts like
 * compose() but from left to right; the resulting composed
 * function gets invoked with the given value.
 *
 * For sanity purposes, all of the functions in the pipeline really must
 * have an arity of 1, meaning, they should only take one argument.
 *
 * @param x     :: Object|Primitive
 * @param funcs :: [...Function]
 *
 * @return      :: Object|Primitive
 */

export function pipe(x, ...funcs) {
  return funcs.reduce((result, func) => {
    return func(result)
  }, x)
}