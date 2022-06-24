/**
 * Returns the Age From a Given Year | e.g 2007 -> 15
 *
 * @param {number} year
 * @returns {number}
 */
export default function getBirthDay(year: number): number {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  return currentYear - year;
}
