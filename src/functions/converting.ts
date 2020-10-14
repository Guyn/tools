import { Hex, RGB, HSL, YUV, CMYK } from '../types';
import { minMax } from './utils';
import { isHex } from './checking';

// Component

export const componentToHexValue = (c: number): Hex => {
  const hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
};

// From Rgb

export const rgbToHex = (rgb: RGB): Hex => {
  const { r, g, b } = rgb;
  return (
    '#' +
    componentToHexValue(minMax(r, 0, 255)) +
    componentToHexValue(minMax(g, 0, 255)) +
    componentToHexValue(minMax(b, 0, 255))
  );
};

// // From Hex

export const hexToRgb = (c: Hex): RGB => {
  if (!isHex(c)) return { r: 0, g: 0, b: 0 };
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
  if (result)
    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    };
  else return { r: 0, g: 0, b: 0 };
};

export const rgbToHsl = (rgb: RGB): HSL => {
  (rgb.r /= 255), (rgb.g /= 255), (rgb.b /= 255);
  var max = Math.max(rgb.r, rgb.g, rgb.b),
    min = Math.min(rgb.r, rgb.g, rgb.b);
  var hue,
    saturation,
    lightness = (max + min) / 2;

  if (max == min) {
    hue = saturation = 0; // achromatic
  } else {
    var delta = max - min;
    saturation =
      lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    switch (max) {
      case rgb.r:
        hue = (rgb.g - rgb.b) / delta + (rgb.g < rgb.b ? 6 : 0);
        break;
      case rgb.g:
        hue = (rgb.b - rgb.r) / delta + 2;
        break;
      case rgb.b:
        hue = (rgb.r - rgb.g) / delta + 4;
        break;
    }
    if (hue) hue /= 6;
    else hue = 0;
  }

  return {
    h: Math.round(360 * hue),
    s: Math.round(saturation * 100),
    l: Math.round(lightness * 100),
  };
};

export const hslToRgb = (input: HSL): RGB => {
  let { h, s, l } = input;
  // Must be fractions of 1
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
};

export const rgbToYuv = (input: RGB): YUV => {
  const { r, g, b } = input;
  const y = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
  const u = Math.round((((b - y) * 0.493 + 111) / 222) * 255);
  const v = Math.round((((r - y) * 0.877 + 155) / 312) * 255);
  return { y: y, u: u, v: v };
};

export const yuvToRgb = (input: YUV): RGB => {
  const y = input.y,
    u = (input.u / 255) * 222 - 111,
    v = (input.v / 255) * 312 - 155;

  const r = minMax(Math.round(y + v / 0.877), 0, 255);
  const g = minMax(Math.round(y - 0.39466 * u - 0.5806 * v), 0, 255);
  const b = minMax(Math.round(y + u / 0.493), 0, 255);

  return { r: r, g: g, b: b };
};

export const rgbToCmyk = (input: RGB): CMYK => {
  let red = Math.max(Math.min(input.r, 255), 0),
    green = Math.max(Math.min(input.g, 255), 0),
    blue = Math.max(Math.min(input.b, 255), 0),
    cyan = 1 - red,
    magenta = 1 - green,
    yellow = 1 - blue,
    black = 1;

  if (red || green || blue) {
    black = Math.min(cyan, Math.min(magenta, yellow));
    cyan = (cyan - black) / (1 - black);
    magenta = (magenta - black) / (1 - black);
    yellow = (yellow - black) / (1 - black);
  } else {
    black = 1;
  }
  return {
    c: Math.round(cyan * 100),
    m: Math.round(magenta * 100),
    y: Math.round(yellow * 100),
    k: Math.round(((black + 254) / 255) * 100),
  };
};
export const cmykToRgb = (input: CMYK): RGB => {
  var cyan = Math.max(Math.min(input.c / 255, 1), 0),
    magenta = Math.max(Math.min(input.m / 255, 1), 0),
    yellow = Math.max(Math.min(input.y / 255, 1), 0),
    black = Math.max(Math.min(input.k / 255, 1), 0),
    red = 1 - cyan * (1 - black) - black,
    green = 1 - magenta * (1 - black) - black,
    blue = 1 - yellow * (1 - black) - black;

  return {
    r: Math.round(red * 255),
    g: Math.round(green * 255),
    b: Math.round(blue * 255),
  };
};

// Hhex To
export const hexToHsl = (c: Hex): HSL => rgbToHsl(hexToRgb(c));
export const hexToYuv = (c: Hex): YUV => rgbToYuv(hexToRgb(c));
export const hexToCmyk = (c: Hex): CMYK => rgbToCmyk(hexToRgb(c));
// hsl to
export const hslToYuv = (c: HSL): YUV => rgbToYuv(hslToRgb(c));
export const hslToHex = (c: HSL): Hex => rgbToHex(hslToRgb(c));
export const hslToCmyk = (c: HSL): CMYK => rgbToCmyk(hslToRgb(c));
// yuv To
export const yuvToCmyk = (c: YUV): CMYK => rgbToCmyk(yuvToRgb(c));
export const yuvToHex = (c: YUV): Hex => rgbToHex(yuvToRgb(c));
export const yuvToHsl = (c: YUV): HSL => rgbToHsl(yuvToRgb(c));
// Cmyk to
export const cmykToHsl = (c: CMYK): HSL => rgbToHsl(cmykToRgb(c));
export const cmykToYuv = (c: CMYK): YUV => rgbToYuv(cmykToRgb(c));
export const cmykToHex = (c: CMYK): Hex => rgbToHex(cmykToRgb(c));

// export const toRgb = (input: CMYK | RGB | HSL | YUS): RGB=> {

// }
