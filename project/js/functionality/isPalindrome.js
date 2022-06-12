/**
 * check if a string is a palindrome
 *
 * @param {string} word
 * @returns {boolean}
 */
function isPalindrome(word) {
  return !word ? "" : word.toString() == word.toString().split("").reverse().join("");
}
module.exports = isPalindrome;
