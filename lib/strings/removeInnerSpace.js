/**
 * Removes the inner whitespace from a string
 * e.g. "  Hello     World  " -> "Hello World"
 *
 * @param {string} word
 * @returns {string}
 */
export default function removeInnerSpace(word) {
    if (typeof word !== "string") {
        throw new TypeError("Expected a string but got " + typeof word);
    }
    return word.replace(/\s+/g, " ");
}
