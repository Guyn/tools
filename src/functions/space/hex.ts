import { Hex, ALL_COLORS, RGB, HSL, YUV, CMYK } from '../../types';
import { getColorSpace } from '../checking';
import { cmykToHex, hslToHex, rgbToHex, yuvToHex } from '../converting';
import { limitTo } from '../utils';
import { allowedHexCharacters } from '../variables';

export const toHexChars = (input: string): Hex => {
  const str =
    '#' +
    input
      .split('')
      .filter((c: string) => allowedHexCharacters.includes(c))
      .join('');
  return limitTo(str, 7, str.length == 4 ? str.substr(1, 4) : '0');
};

export const toHexCharsGroup = (input: string[]): Hex[] =>
  input
    .map((v) => (v = v.trim()))
    .filter((v) => v.charAt(0) == '#')
    .map((v) => (v = toHexChars(v)));

export const toHex = (input: ALL_COLORS): Hex => {
  switch (getColorSpace(input)) {
    case 'cmyk':
      return cmykToHex(input as CMYK);
    case 'rgb':
      return rgbToHex(input as RGB);
    case 'yuv':
      return yuvToHex(input as YUV);
    case 'hsl':
      return hslToHex(input as HSL);
    default:
      return input as Hex;
  }
};
