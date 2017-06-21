/**
 * Distance between two points (x, y) using the pythagorean theorem. Beware floating point precision.
 * @param { [number] } p1
 * @param  { [number] } p2
 * @return { number }
 */
export function distance(p1, p2) {  
  if (arguments.length === 4) {
    [p1, p2] = [
      [arguments[0], arguments[1]],
      [arguments[2], arguments[3]]
    ]
  }
  
  return Math.sqrt(
    Math.pow(p2[0] - p1[0], 2) +
    Math.pow(p2[1] - p1[1], 2)
  )
}