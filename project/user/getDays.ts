/**
 * returns the number of days in a given age
 *
 * @param {number} age
 * @returns {number}
 */
 export default function getDays(age: number): number {
  if (typeof age !== "number") {
    throw new TypeError("Expected a number but got " + typeof age);
  }
  return age * 12 * 4 * 7;
}