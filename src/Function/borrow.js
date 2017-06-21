/**
 * Borrows a method from an object prototype and turns it into a function that can be called with a new context as its first argument; subsequent arguments will be treated as the arguments you'd normally pass to the method.
 * @param { function } protoMethod
 * @return { function }
 */
export function borrow(protoMethod) {
  return function(context, ...args) {
    return protoMethod.apply(context, args)
  }
}

/**
 * Borrows a method from an object prototype and turns it into a partially applied function (arguments go after the method) that accepts a context and applies the previously passed arguments.
 * @param { function } protoMethod
 * @return { function }
 */
export function unMethod(protoMethod, ...args) {
  return function(context) {
    return protoMethod.apply(context, args)
  }
}