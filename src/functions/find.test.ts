import { findHex, getColorDistance } from './find';

describe('Hex Convert', () => {
  describe('getColorDistance', () => {
    it('Should be a maxed out distance', () => {
      const input = { r: 0, g: 0, b: 0 };
      const compare = { r: 255, g: 255, b: 255 };
      expect(getColorDistance(input, compare)).toBe(442);
    });
    it('Should be no distance', () => {
      const input = { r: 0, g: 0, b: 0 };
      const compare = { r: 0, g: 0, b: 0 };
      expect(getColorDistance(input, compare)).toBe(0);
    });
    it('Should be full lightness distance', () => {
      const input = { r: 255, g: 0, b: 0 };
      const compare = { r: 0, g: 255, b: 0 };
      expect(getColorDistance(input, compare)).toBe(361);
    });
    it('Should be full lightness distance', () => {
      const input = { r: 0, g: 0, b: 255 };
      const compare = { r: 0, g: 255, b: 0 };
      expect(getColorDistance(input, compare)).toBe(361);
    });
    it('Should be full lightness distance', () => {
      const input = { r: 0, g: 0, b: 255 };
      const compare = { r: 0, g: 255, b: 0 };
      expect(getColorDistance(input, compare)).toBe(361);
    });
  });

  describe('findHex', () => {
    it('Find hex strings, single', () => {
      expect(findHex('#aabbcc')).toStrictEqual(['#aabbcc']);
    });
    it('Find hex strings, multi', () => {
      expect(findHex('#aabbcc#aabbcc#aabbcc')).toStrictEqual([
        '#aabbcc',
        '#aabbcc',
        '#aabbcc',
      ]);
    });
    it('Find hex strings, multi comma', () => {
      expect(findHex('#aabbcc,#aabbcc,#aabbcc')).toStrictEqual([
        '#aabbcc',
        '#aabbcc',
        '#aabbcc',
      ]);
    });
    it('Find hex strings, multi comma space', () => {
      expect(findHex('#aabbcc, #aabbcc, #aabbcc')).toStrictEqual([
        '#aabbcc',
        '#aabbcc',
        '#aabbcc',
      ]);
    });
    it('Find hex strings, multi spaced', () => {
      expect(findHex('#aabbcc #aabbcc #aabbcc')).toStrictEqual([
        '#aabbcc',
        '#aabbcc',
        '#aabbcc',
      ]);
    });
    it('Find hex strings, multi spaced, last invalid', () => {
      expect(findHex('#aabbcc #aabbcc #aggbcc')).toStrictEqual([
        '#aabbcc',
        '#aabbcc',
      ]);
    });
    it('Find hex strings, multi spaced, last invalid', () => {
      expect(findHex('#aabbcc #aabbcc #aaa')).toStrictEqual([
        '#aabbcc',
        '#aabbcc',
        '#aaaaaa',
      ]);
    });
  });
});
