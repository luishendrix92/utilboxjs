/**
 * This function takes no arguments and does nothing (returns undefined), useful for optional callbacks.
 * @return { undefined }
 */
export function noop() {
  return undefined // Explicitly stated
}

// TODO: implement Constant

/**
 * Returns the first argument that you pass to it.
 * @param { * } onlyArgument
 * @return { * }
 */
export function identity(onlyArgument) {
  return onlyArgument
}