/**
 * Get a random element from an array
 *
 * @param {any[]} array
 * @returns
 */
 function randomElementFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
module.exports = randomElementFrom;