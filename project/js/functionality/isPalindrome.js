/**
 * check if a string is a palindrome
 *
 * @param {string} word
 * @returns {boolean}
 */
function isPalindrome(word) {
  return word.toString() == reverseString(word.toString());
}
module.exports = isPalindrome;
