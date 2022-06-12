/**
 * sort the array randomly
 *
 * @param {any[]} array array of anything
 * @returns {array} sort of the array
 */
export default function shuffle(array: any[]): any {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array");
  }
  return array.sort((a, b) => 0.5 - Math.random());
}
