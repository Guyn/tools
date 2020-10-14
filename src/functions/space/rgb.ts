import { Hex, ALL_COLORS, RGB, HSL, YUV, CMYK } from '../../types';
import { getColorSpace } from '../checking';
import { cmykToRgb, hslToRgb, hexToRgb, yuvToRgb } from '../converting';

export const toRgb = (input: ALL_COLORS): RGB => {
  switch (getColorSpace(input)) {
    case 'cmyk':
      return cmykToRgb(input as CMYK);
    case 'yuv':
      return yuvToRgb(input as YUV);
    case 'hsl':
      return hslToRgb(input as HSL);
    case 'hex':
      return hexToRgb(input as Hex);
    case 'rgb':
      return input as RGB;
    default:
      return input as RGB;
  }
};
