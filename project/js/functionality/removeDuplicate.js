/**
 * Remove duplicated Elemets in array
 *
 * @param {any} value
 * @returns {array}
 */
function removeDuplicate(array) {
  array.filter(function (ele, index) {
    return [...new Set(array)];
  });
}
module.exports = removeDuplicate;
