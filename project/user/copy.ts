/**
 * It takes text to copy it to the user
 *
 * @param {string} text - The text to copy to the clipboard.
 */
export default function copy(text: string): void {
  navigator.clipboard.writeText(text);
}
