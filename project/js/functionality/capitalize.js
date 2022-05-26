/**
 * Making first letter capital in the word
 *
 * @param {string} word
 * @returns {string}
 */
function capitalize(word) {
  return !word ? "" : word.charAt(0).toUpperCase() + word.slice(1);
}
module.exports = capitalize;
