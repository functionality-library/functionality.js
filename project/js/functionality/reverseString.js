/**
 *
 * @param {string} word string to be reversed
 * @returns {string}
 */
function reverseString(word) {
  return word.split("").reverse().join("");
}
module.exports = reverseString;
