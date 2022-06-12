/**
 * Making first letter capital in the word
 *
 * @param {string} word
 * @returns {string}
 */
function capitalize(word: string): string {
  if (typeof word !== "string") {
    throw new TypeError("Expected a string but got " + typeof word);
  }
  return !word ? "" : word.charAt(0).toUpperCase() + word.slice(1);
}

// module.exports = capitalize;
export default capitalize;
