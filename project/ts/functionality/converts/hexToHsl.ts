export default function hexToHsl(hex: string): number[] {
  let rgb = hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => "#" + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));
  (rgb[0] /= 255), (rgb[1] /= 255), (rgb[2] /= 255);
  var max = Math.max(rgb[0], rgb[1], rgb[2]),
    min = Math.min(rgb[0], rgb[1], rgb[2]);
  var h: number,
    s: number,
    l: number = (max + min) / 2;
  if (max == min) {
    h = s = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rgb[0]:
        h = (rgb[1] - rgb[2]) / d + (rgb[1] < rgb[2] ? 6 : 0);
        break;
      case rgb[1]:
        h = (rgb[2] - rgb[1]) / d + 2;
        break;
      case rgb[2]:
        h = (rgb[0] - rgb[1]) / d + 4;
        break;
    }
    h /= 6;
  }
  return [h, s, l];
}
