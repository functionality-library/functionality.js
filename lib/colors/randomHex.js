/**
 * returns a random hex color e.g #f35a00
 *
 * @returns {string}
 */
export default function randomHex() {
    return `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padEnd(6, "0")}`;
}
