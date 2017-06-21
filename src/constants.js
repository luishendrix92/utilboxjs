export const MAX_INT = 9007199254740991
export const SAFE_CALLSTACK = 11034
export const wordPattern = /[a-zA-Z0-9\-_']+/g

/**
 * Composable proxy for hasOwnProperty
 * @private
 * @param { object } obj 
 * @param { string } prop 
 * @return { boolean }
 */
export const hop = function (obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}