/**
 * Converts HSL color to RGB color
 *
 * @param {number} h
 * @param {number} s
 * @param {number} l
 * @returns {number[]}
 */
export default function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;
    const k = (n) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [
        Math.trunc(255 * f(0)),
        Math.trunc(255 * f(8)),
        Math.trunc(255 * f(4)),
    ];
}
