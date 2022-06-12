/**
 * Get maximum value in array
 *
 * @param {number[]} array
 * @returns {number}
 */
function maxArray(array: number[]): number {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array but got " + typeof array);
  }
  return Math.max(...array); // using math.max() to get maximum value in array is faster than using a for loop
}

// module.exports = maxArray;
export default maxArray;
