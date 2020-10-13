import { Hex, RGB, HSL } from '../types';
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

export const hexToHsl = (c: Hex): HSL => {
  const rgb = hexToRgb(c);
  return rgbToHsl(rgb);
};
