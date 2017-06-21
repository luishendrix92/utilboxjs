/**
 * Returns a list of chunks of defined size, if the size of the list isn't evenly divisible by the chunk size, the last elements are included as well as a chunk of inferior size. You must supply a skip that defaults to 0, negative skips will repeat previous elements while positive skips will skil subsequent elements.
 * @param { number } chunkSize
 * @param { number } skip
 * @param { [*] } list
 * @return { [[*]] }
 */
export function partition(chunkSize, skip, list) {
  const len = list.length
  const partitioned = []
  const nChunks = chunkSize
    ? Math.ceil(len / (chunkSize + skip)) : 0
  let start, end
  
  if (nChunks > 0) {
    for (let i = 0; i < nChunks; i += 1) {
      start = i > 0 ? i * (chunkSize + skip) : i
      end = start + chunkSize
      
      partitioned.push(list.slice(start, end))
    }
  }

  return partitioned
}

// Implement separate, one that matches pred, other that doesn't