/**
 * Get maximum value in array
 *
 * @param {number[]} array
 * @returns {number}
 */
export default function maxArray(array) {
    if (!Array.isArray(array)) {
        throw new TypeError("Expected an array but got " + typeof array);
    }
    return Math.max(...array); // using math.max() to get maximum value in array is faster than using a for loop
}
