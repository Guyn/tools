import { Hex, RGB } from "../types";
import { minmax } from "./utils";

// Component

export const componentToHexValue = (c: number): Hex => {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

// From Rgb

export const rgbToHex = (rgb: RGB): Hex => {
  const { r, g, b } = rgb;
  return (
    "#" +
    componentToHexValue(minmax(r, 0, 255)) +
    componentToHexValue(minmax(g, 0, 255)) +
    componentToHexValue(minmax(b, 0, 255))
  );
};

// // From Hex

// export const hexToRgb = (hex: Hex): RGB => {
//   const hexArray: [] = hex.match(/.{1,2}/g;
//     return {
//         r: parseInt(hexArray[0], 16),
//         g: parseInt(hexArray[1], 16),
//         b: parseInt(hexArray[2], 16),
//     };
// };
