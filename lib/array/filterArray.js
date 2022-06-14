/**
 * Filter an array depending on the given value
 *
 * @param {any[]} array
 * @param {any} value
 * @returns {any[]}
 */
export default function filterArray(array, value) {
    if (!Array.isArray(array)) {
        throw new TypeError("Expected an array but got " + typeof array);
    }
    return array.filter((e) => e != value);
}
