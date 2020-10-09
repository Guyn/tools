import { Hex, RGB } from "../types";
import { minMax } from "./utils";
import { isHex } from "./checking";

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
