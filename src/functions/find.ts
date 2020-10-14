import { RGB, Hex } from '../types';
import { allowedHexCharacters } from './variables';
import { toHexCharsGroup } from './space/hex';

export const findHex = (input: string): Hex[] =>
  toHexCharsGroup(
    input
      .split('') // Split the full string into characters
      .filter((c: string) => allowedHexCharacters + '#'.includes(c)) // Remove all characters which cant be hex
      .join('') // Make it into one string again
      .split('#') // Split it up by the #
      .map((c) => (c = '#' + c)) // add the hash back to every code
  ).filter((h) => input.includes(h) || input.includes(h.substr(0, 4))); // Check if the has exists in the input.

export const getColorDistance = (input: RGB, compare: RGB): number => {
  var sumOfSquares = 0;

  sumOfSquares += Math.pow(input.r - compare.r, 2);
  sumOfSquares += Math.pow(input.g - compare.g, 2);
  sumOfSquares += Math.pow(input.b - compare.b, 2);

  return Math.round(Math.sqrt(sumOfSquares));
};
