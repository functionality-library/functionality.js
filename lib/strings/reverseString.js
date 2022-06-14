/**
 *
 * @param {string} word
 * @returns {string}
 */
export default function reverseString(word) {
    if (typeof word !== "string") {
        throw new TypeError("Expected a string but got " + typeof word);
    }
    if (!word || typeof word !== "string") {
        return "";
    }
    else {
        return word.split("").reverse().join("");
    }
}
