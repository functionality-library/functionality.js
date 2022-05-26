/**
 * get average between two numbers
 *
 * @param {number} number1
 * @param {number} number2
 * @returns {number}
 */
function getMid(number1 = 0, number2) {
  if (typeof number1 !== "number" && !number2) {
    return 0;
  }
  if (!number2 && typeof parseFloat(number1) === "number") {
    return number1;
  }
  number1 = isNaN(number1) ? "l" : number1;
  number2 = isNaN(number2) ? "l" : number2;
  if (isNaN(number1) == true || isNaN(number2) == true) {
    return 0;
  }
  return Math.floor((parseFloat(number1) + parseFloat(number2)) / 2);
}
module.exports = getMid;
