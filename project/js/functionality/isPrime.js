/**
 * check if a number is prime
 *
 * @param {number} number
 * @returns {boolean}
 */
function isPrime(number) {
  // this code is changed from the original one because it was causing infinite loop
  // when number % i never equals 0
  for (i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
module.exports = isPrime;
