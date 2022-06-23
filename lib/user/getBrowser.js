/**
 * Returns the browser name of the active user.
 *
 * @returns {string}
 */
export default function getBrowser() {
    return navigator.userAgent.split(" ")[navigator.userAgent.split(" ").length - 1];
}
