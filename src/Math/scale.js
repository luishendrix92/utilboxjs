/**
 * Converts an interval to another and pinpoints the equivalency of a number
 * @param { number } a1
 * @param { number } b1
 * @param { number } a2
 * @param { number } b2
 * @param { number } num
 * @return { number }
 */
export function scale(a1, b1, a2, b2, num) {
  return a1 + (((num - a2) / (b2 - a2)) * (b1 - a1))
}

/* Algorithm semantics
*  --------------------
*  The equivalency of N from the scaled interval in the original interval
*  is equal to the left side of the original interval plus the distance
*  between the original interval times the percentage; and this percentage
*  is obtained by computing the distance between the number and the
*  left side of the scaled interval.                                    */