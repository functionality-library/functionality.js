/**
 * get average between two numbers
 *
 * @param {number} number1
 * @param {number} number2
 * @returns {number}
 */
export default function getMid(number1: number = 0, number2: number): number {
  if (typeof number1 !== "number" && !number2) {
    return 0;
  }
  if (!number2 && typeof +number1 === "number") {
    return number1;
  }
  if (isNaN(+number1) || isNaN(+number2)) {
    return 0;
  }
  return Math.floor((+number1 + +number2) / 2);
}
