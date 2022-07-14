/**
 * returns the number of weeks in a given age
 *
 * @param {number} age
 * @returns {number}
 */
 export default function getWeeks(age: number): number {
  if (typeof age !== "number") {
    throw new TypeError("Expected a number but got " + typeof age);
  }
  return age * 12 * 4;
}