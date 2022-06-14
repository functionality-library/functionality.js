/**
 * returns the factors of the given number
 * 
 * @param {number} number
 * @returns {number[]}
 */
export default function getFactors(number: number): number[] {
  if (typeof number !== "number") {
    throw new TypeError("Expected a number but got " + typeof number);
  }
  return [...Array(number + 1).keys()].filter((i) => number % i === 0);
}
