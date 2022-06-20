/**
 * returns the number of hours in a given age
 *
 * @param {number} age
 * @returns {number}
 */
export default function getHours(age) {
    if (typeof age !== "number") {
        throw new TypeError("Expected a number but got " + typeof age);
    }
    return age * 12 * 7 * 4 * 24;
}
