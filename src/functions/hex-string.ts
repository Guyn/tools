import { Hex } from '../types';
import { limitTo } from './utils';
import { allowedHexCharacters } from './checking';

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

export const findHex = (input: string): Hex[] =>
  toHexCharsGroup(
    input
      .split('') // Split the full string into characters
      .filter((c: string) => allowedHexCharacters + '#'.includes(c)) // Remove all characters which cant be hex
      .join('') // Make it into one string again
      .split('#') // Split it up by the #
      .map((c) => (c = '#' + c)) // add the hash back to every code
  ).filter((h) => input.includes(h) || input.includes(h.substr(0, 4))); // Check if the has exists in the input.
