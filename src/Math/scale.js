/**
 * Converts an interval to another and pinpoints the equivalency of a number
 *
 * @param a1  :: Float
 * @param b1  :: Float
 * @param a2  :: Float
 * @param b2  :: Float
 * @param num :: Float
 *
 * @return    :: Float
 *
 * Algorithm semantics
 * -------------------
 * 
 * The equivalency of n from the scaled interval in the original interval
 * is equal to the left side of the original interval plus the distance
 * between the original interval times the percentage; and this percentage
 * is obtained by computing the distance between the number and the
 * left side of the scaled interval.
 */

export function scale(a1, b1, a2, b2, num) {
  return a1 + (((num - a2) / (b2 - a2)) * (b1 - a1))
}