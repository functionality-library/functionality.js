/**
 * returns the months of the age
 *
 * @param {number} age
 * @returns {number}
 */
export default function getMonths(age) {
    if (typeof age !== "number") {
        throw new TypeError("Expected a number but got " + typeof age);
    }
    return age * 12;
}
