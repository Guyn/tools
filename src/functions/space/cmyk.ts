import { Hex, ALL_COLORS, RGB, HSL, YUV, CMYK } from '../../types';
import { getColorSpace } from '../checking';
import { hexToCmyk, hslToCmyk, yuvToCmyk, rgbToCmyk } from '../converting';

export const toCmyk = (input: ALL_COLORS): CMYK => {
  switch (getColorSpace(input)) {
    case 'rgb':
      return rgbToCmyk(input as RGB);
    case 'yuv':
      return yuvToCmyk(input as YUV);
    case 'hsl':
      return hslToCmyk(input as HSL);
    case 'hex':
      return hexToCmyk(input as Hex);
    case 'cmyk':
      return input as CMYK;
    default:
      return input as CMYK;
  }
};
