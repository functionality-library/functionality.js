/**
 * Get a random element from an array
 *
 * @param {any[]} array
 * @returns
 */
function randomElementFrom(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array but got ' + typeof array);
  }
  return array[Math.floor(Math.random() * array.length)];
}

module.exports = randomElementFrom;