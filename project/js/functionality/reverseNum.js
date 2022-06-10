/**
 * reverse a number (e.g. 12345 -> 54321)
 *
 * @param {number} number
 * @returns {number}
 */
function reverseNum(number) {
  if (typeof number !== "number") {
    throw new TypeError('Expected a number but got ' + typeof number);
  }
  if (number == 0 || number == -0) {
    return 0;
  }
  if (!number) {
    return "";
  }
  // this code is changed from the original one because it didn't work properly when the number is decimal
  if (number < 10 && number > -10) {
    return number;
  }
  const parsedNumber = +(number > 10 ? number : number * -1)
    .toString()
    .split("")
    .reverse()
    .join("");
  return number > 10 ? parsedNumber : parsedNumber * -1; // this code more readable than the other one also it works with decimals too
}
module.exports = reverseNum;
