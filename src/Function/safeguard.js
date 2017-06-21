/**
 * Extremely unstable and experimental function to protect unwanted results from the execution of a function. It calls a function and catches any exception that may occur while also guards you from null and undefined return values. You need to provide a default value to substitute the return and please don't blame me from any unwanted effect. Note that if you pass a function as the default, it will receive the name of the error, null or undefined; whatever this function returns will be the eventual returned value of the safeguarded function.
 * @param { function } f,
 * @param { * } fallback
 */
function safeguard(f, fallback) {
  const fallFunc = typeof fallback === 'function'

  return function(...args) {
    let returned

    try {
      returned = f.apply(this, args)
    } catch (e) {
      return fallFunc ? fallback(e) : fallback
    }

    return returned === null || returned === undefined
      ? fallFunc ? fallback(returned) : fallback
      : returned
  }
}

// TODO: Change to a defaulkts