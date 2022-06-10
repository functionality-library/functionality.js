const reverseString = require('./reverseString');
/**
 * check if a string is a palindrome
 *
 * @param {string} word
 * @returns {boolean}
 */
function isPalindrome(word) {
  if (typeof word !== 'string') {
    throw new TypeError('Expected a string but got ' + typeof word);
  }
  return word.toString() == reverseString(word.toString());
}
module.exports = isPalindrome;
