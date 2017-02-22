export const MAX_INT = 9007199254740991
export const SAFE_CALLSTACK = 11034

export const hop = (obj, prop) => {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}