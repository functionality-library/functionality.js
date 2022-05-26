/**
 * Get sum of all numbers in array
 *
 * @param {number[]} array array of numbers
 * @returns {number} sum of all numbers in array
 */
 function sumOfArray(array) {
  return array.reduce((a, b) => a + b, 0);
}
module.exports = sumOfArray;