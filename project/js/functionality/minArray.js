/**
 * Get minimum value in array
 *
 * @param {number[]} array - Array of numbers
 * @returns {number}
 */
 function minArray(array) {
  return Math.min(...array); // using math.min() to get minimum value in array is faster than using a for loop
}
module.exports = minArray;