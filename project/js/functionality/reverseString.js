/**
 *
 * @param {string} word string to be reversed
 * @returns {string}
 */
function reverseString(word) {
  if (!word || typeof word !== "string") {
    return "";
  } else {
    return word.split("").reverse().join("");
  }
}
module.exports = reverseString;
