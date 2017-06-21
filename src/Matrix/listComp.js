import { each } from '../List/each'

/**
 * A typical list comprehension, it takes two or more arrays and a curried function that receives each component of the comprehension, then does something with them.
 * @param { [*] } lists
 * @param { function } f
 * @return { * }
 */
export function listComp(lists, f) {
  if (!lists.length) return []

  let firstList = lists[0]
  let otherLists = lists.slice(1)
  let comprehension = []

  each(firstList, function(item) {
    comprehension = comprehension.concat(
      otherLists.length
        ? listComp(otherLists, f(item))
        : f(item)
    )
  })

  return comprehension
}