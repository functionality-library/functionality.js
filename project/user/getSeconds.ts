/**
 * returns the number of Seconds in a given age
 *
 * @param {number} age
 * @returns {number}
 */
 export default function getSeconds(age: number): number {
    if (typeof age !== "number") {
      throw new TypeError("Expected a number but got " + typeof age);
    }
    return age * 12 * 7 * 4 * 24 * 60 * 60;
  }