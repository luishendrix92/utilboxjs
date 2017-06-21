/**
 * Transposes an MxN bidimensional array. In linear algebra, transposing is the process of turning columns into rows, turning it into an NxM matrix. Example: [[1 2 3] [4 5 6]] (2x3) transposed is [[1 4] [2 5] [3 6]] (3x2). Needless to say, it returns a new bidimensional array.
 * @param {[[*]]} matrix
 * @return {[[*]]}
 */
export function transpose(matrix) {
  const transposed = []
  const mLen = matrix.length
  const nLen = matrix[0] !== undefined
    ? matrix[0].length : 0

  for (let n = 0; n < nLen; n += 1) {
    let row = []

    for (let m = 0; m < mLen; m += 1) row.push(matrix[m][n])

    transposed.push(row)
  }

  return transposed
}