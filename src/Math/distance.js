/*
 * Distance between two points (x, y) using the pythagorean theorem
 *
 * @param a :: Point :: [float, float]
 * @param b :: Point :: [float, float]
 *
 * @return float
 */
 
export function distance(a, b) {  
  if (arguments.length === 4) {
    [a, b] = [
      [arguments[0], arguments[1]],
      [arguments[2], arguments[3]]
    ]
  }
  
  return Math.sqrt(
    (b[0] - a[0]) ** 2 +
    (b[1] - a[1]) ** 2)
}