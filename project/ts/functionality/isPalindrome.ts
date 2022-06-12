import functionality from './main';
/**
 * check if a string is a palindrome
 *
 * @param {string} word
 * @returns {boolean}
 */
function isPalindrome(word: string): boolean {
  if (typeof word !== 'string') {
    throw new TypeError('Expected a string but got ' + typeof word);
  }
  return word.toString() == functionality.reverseString(word.toString());
}
// module.exports = isPalindrome;
export default isPalindrome;