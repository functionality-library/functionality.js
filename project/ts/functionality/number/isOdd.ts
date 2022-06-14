/**
 * check if a number is odd
 *
 * @param {number} number
 * @returns {boolean}
 */
export default function isOdd(number: number): boolean {
  if (typeof number !== "number") {
    throw new TypeError("Expected a number but got " + typeof number);
  }
  return number % 2 != 0;
}
