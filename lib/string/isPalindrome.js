import functionality from "../main";
/**
 * check if a string is a palindrome
 *
 * @param {string} word
 * @returns {boolean}
 */
export default function isPalindrome(word) {
    if (typeof word !== "string") {
        throw new TypeError("Expected a string but got " + typeof word);
    }
    return word.toString() == functionality.reverseString(word.toString());
}
