/**
 * Get sum of all numbers in array
 *
 * @param {number[]} array array of numbers
 * @returns {number} sum of all numbers in array
 */
 function sumOfArray(array) {
    if (!Array.isArray(array) || array.some(ele => typeof ele !== "number")) {
      throw new TypeError('Expected an array of numbers but got ' + (Array.isArray(array) ? 'array' : typeof array));
    }
  return array.reduce((a, b) => a + b, 0);
}
module.exports = sumOfArray;