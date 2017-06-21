import { random } from '../Math/random'

/**
 * Selects a random element from anything with an index, if you pass an empty list you'll get undefined (so please, don't).
 * @param { [*] } list
 * @return { * }
 */
export function randElem(list) {
  const maxIdx = list.length - 1

  return maxIdx < 0
    ? undefined
    : list[random(maxIdx)]
}

// Implement Sample