/**
 * check if a number is even
 *
 * @param {number} number
 * @returns {boolean}
 */
export default function isEven(number) {
    if (typeof number !== "number") {
        throw new TypeError("Expected a number but got " + typeof number);
    }
    return number % 2 == 0;
}
