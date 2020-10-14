import { Hex, ALL_COLORS, RGB, HSL, YUV, CMYK } from '../../types';
import { getColorSpace } from '../checking';
import { cmykToHsl, yuvToHsl, hexToHsl, rgbToHsl } from '../converting';

export const toHsl = (input: ALL_COLORS): HSL => {
  switch (getColorSpace(input)) {
    case 'cmyk':
      return cmykToHsl(input as CMYK);
    case 'yuv':
      return yuvToHsl(input as YUV);
    case 'hsl':
      return input as HSL;
    case 'hex':
      return hexToHsl(input as Hex);
    case 'rgb':
      return rgbToHsl(input as RGB);
    default:
      return input as HSL;
  }
};
