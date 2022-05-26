/**
 * Get maximum value in array
 *
 * @param {number[]} array
 * @returns {number}
 */
 function maxArray(array) {
  return Math.max(...array); // using math.max() to get maximum value in array is faster than using a for loop
}
module.exports = maxArray;