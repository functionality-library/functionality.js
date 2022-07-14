/**
 * It takes text to copy it to the user
 *
 * @param {string} text
 */
export default async function copy(text: string) {
  try {
    const toCopy = text || location.href;
    await navigator.clipboard.writeText(toCopy);
    console.log("Text or Page URL copied");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}
