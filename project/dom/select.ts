/**
 * returns the number of Seconds in a given age
 *
 * @param {string} element
 * @returns {number}
 */
export default function select(element: string): any {
  if (typeof element !== "string") {
    throw new TypeError("Expected a string but got " + typeof element);
  }
  return document.querySelector(element);
}
