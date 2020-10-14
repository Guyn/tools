import { Hex, ALL_COLORS, RGB, HSL, YUV, CMYK } from '../../types';
import { getColorSpace } from '../checking';
import { rgbToYuv, hslToYuv, hexToYuv, cmykToYuv } from '../converting';

export const toYuv = (input: ALL_COLORS): YUV => {
  switch (getColorSpace(input)) {
    case 'rgb':
      return rgbToYuv(input as RGB);
    case 'yuv':
      return input as YUV;
    case 'hsl':
      return hslToYuv(input as HSL);
    case 'hex':
      return hexToYuv(input as Hex);
    case 'cmyk':
      return cmykToYuv(input as CMYK);
    default:
      return input as YUV;
  }
};
