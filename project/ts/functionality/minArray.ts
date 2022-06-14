/**
 * Get minimum value in array
 *
 * @param {number[]} array - Array of numbers
 * @returns {number}
 */
export default function minArray(array: number[]): number {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array but got " + typeof array);
  }
  return Math.min(...array); // using math.min() to get minimum value in array is faster than using a for loop
}