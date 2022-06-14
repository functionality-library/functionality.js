/**
 * displays a random hsl color
 *
 * @returns {string}
 */
export default function randomHsl() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100);
    const l = Math.floor(Math.random() * 100);
    return `hsl(${h}, ${s}%, ${l}%)`;
}
