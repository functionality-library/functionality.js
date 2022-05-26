/**
 * Filter an array depending on the given value
 *
 * @param {any[]} array
 * @param {any} value
 * @returns
 */
function filterArray(array, value) {
  return array.filter((e) => e != value);
}
module.exports = filterArray;
