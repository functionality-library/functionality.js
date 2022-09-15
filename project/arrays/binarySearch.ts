/**
 * Get index of `target` in a sorted array
 * or report it doesn't exist by returning `-1`.
 *
 * @param {number[]} array
 * @returns {number}
 */
export default function binarySearch(array: number[], target: number): number {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array but got " + typeof array);
  }
  if (array.length === 0) {
    return -1;
  }
  for (let i = 0; i + 1 < array.length; i++) {
    if (array[i] > array[i + 1]) {
      throw new Error("The given array is not sorted");
    }
  }
  let low = 0, high = array.length - 1;
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (array[mid] === target) {
      return mid;
    }
    array[mid] > target ? (high = mid - 1) : (low = mid + 1);
  }
  return -1;
}
