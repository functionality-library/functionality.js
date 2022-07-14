/**
 * Get a random element from an array
 *
 * @param {any[]} array
 * @returns {any}
 */
export default function randomElementFrom(array: any[]): any {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array but got " + typeof array);
  }
  return array[Math.floor(Math.random() * array.length)];
}
