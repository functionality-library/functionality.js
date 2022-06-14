/**
 * Generate a random number
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export default function randomNumber(min, max) {
    if (typeof min !== "number" || typeof max !== "number") {
        throw new TypeError("Expected numbers but got " + typeof min + " and " + typeof max);
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}
