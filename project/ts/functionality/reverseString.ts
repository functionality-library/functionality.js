/**
 *
 * @param {string} word string to be reversed
 * @returns {string}
 */
function reverseString(word: string): string {
  if (typeof word !== "string") {
    throw new TypeError("Expected a string but got " + typeof word);
  }
  if (!word || typeof word !== "string") {
    return "";
  } else {
    return word.split("").reverse().join("");
  }
}
// module.exports = reverseString;
export default reverseString;
