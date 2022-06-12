/**
 * Get a random number
 *
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
function randomNum(min: number, max: number): number {
  if (typeof min !== "number" || typeof max !== "number") {
    throw new TypeError(
      "Expected numbers but got " + typeof min + " and " + typeof max
    );
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// module.exports = randomNum;
export default randomNum;
