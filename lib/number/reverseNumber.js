/**
 * reverse a number (e.g. 12345 -> 54321 or -12345 -> -54321)
 *
 * @param {number} number
 * @returns {number}
 */
export default function reverseNumber(number) {
    if (typeof number !== "number") {
        throw new TypeError("Expected a number but got " + typeof number);
    }
    if (number == 0 || number == -0) {
        return 0;
    }
    if (number < 10 && number > -10) {
        return number;
    }
    const parsedNumber = +(number > 10 ? number : number * -1)
        .toString()
        .split("")
        .reverse()
        .join("");
    return number > 10 ? parsedNumber : parsedNumber * -1; // this code more readable than the other one also it works with decimals too
}
