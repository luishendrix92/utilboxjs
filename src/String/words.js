import { wordPattern } from '../constants'

/**
 * Turns a string into a list of words using a rather simple split by space character. By setting the optional argument to True, the function will use a RegExp to match words but be careful, it may be inefficient in a large or dangerously crafted piece of text.
 * @param { string } text
 * @param { boolean } useRegex
 * @return { [string] }
 */
export function words(text, useRegex = false) {
  return useRegex
    ? text.match(wordPattern) || []
    : text.split(' ')
}

/**
 * From a list of strings, constructs a single string after joining them with a space character; it's a composable and idiomatic version of .join(' ').
 * @param { [string] } words
 * @return { string }
 */
export function unwords(words) {
  return words.join(' ')
}