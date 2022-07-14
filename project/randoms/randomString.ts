/**
 * Generate a random String
 *
 * @param {number} length
 * @returns {string}
 */
export default function randomString(length: number = 5): string {
  if (typeof length !== "number") {
    throw new TypeError("Expected numbers but got " + typeof length);
  }
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
