import { each } from './each'

/**
 * A typical list comprehension, it takes two or more arrays and a
 * curried function that receives each component of the comprehension
 * and does something with them. You can compare this to what you'd
 * find in languages like Python, Haskell or Elixir.
 *
 * @param list :: Array
 * @param func :: Function
 *
 * @return     :: [Object|Primitive]
 */

export function listComp(lists, func) {
  if (!lists.length) return []
    
  let firstList = lists[0]
  let otherLists = lists.slice(1)
  let comprehension = []

  each(firstList, item => {
    comprehension = comprehension.concat(
      otherLists.length
        ? listComp(otherLists, func(item))
        : func(item))
  })

  return comprehension
}