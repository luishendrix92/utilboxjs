import { filter } from './filter'
import { complement } from '../Function/complement'

/**
 * Same functionality of filter but instead returns the elements that don't fail the criteria; you can think of it as the complement function of filter.
 * @param { function } rejectionCriteria 
 * @param { [*] } candidates 
 * @return [*]
 */
export function reject(rejectionCriteria, candidates) {
  return filter(
    candidates,
    complement(rejectionCriteria)
  )
}