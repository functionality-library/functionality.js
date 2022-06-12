/**
 * Remove duplicated Elemets in array
 *
 * @param {any[]} array
 */
function removeDuplicate(array: any[]): void {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array but got " + typeof array);
  }
  array.filter(function (ele, index) {
    return [...new Set(array)];
  });
}

// module.exports = removeDuplicate;
export default removeDuplicate;
