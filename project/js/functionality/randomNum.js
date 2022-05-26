/**
 * Get a random number
 *
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
 function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
module.exports = randomNum;