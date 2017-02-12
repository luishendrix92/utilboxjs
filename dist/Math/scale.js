/**
 * Converts an interval to another and pinpoints the equivalency of a number
 * @param { Float } a1
 * @param { Float } b1
 * @param { Float } a2
 * @param { Float } b2
 * @param { Float } num
 * @return { Float }
 */

export function scale(a1, b1, a2, b2, num) {
  var equivalency = a1 + (num - a2) / (b2 - a2) * (b1 - a1);

  return +parseFloat(equivalency).toPrecision(10);
}

/**
 * Algorithm semantics
 * -------------------
 * 
 * The equivalency of n from the scaled interval in the original interval
 * is equal to the left side of the original interval plus the distance
 * between the original interval times the percentage; and this percentage
 * is obtained by computing the distance between the number and the
 * left side of the scaled interval.
 */