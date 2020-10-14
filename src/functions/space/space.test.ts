import { toHexChars, toHexCharsGroup, toHex } from './hex';
import { toCmyk } from './cmyk';
import { toRgb } from './rgb';
import { toHsl } from './hsl';
import { toYuv } from './yuv';

describe('Hex Convert', () => {
  describe('toHexChars', () => {
    it('string should be converted to a hex', () => {
      expect(toHexChars('This is a test')).toStrictEqual('#ae0000');
    });
    it('Hex with space should be converted to a hex', () => {
      expect(toHexChars(' #ff0aa0')).toStrictEqual('#ff0aa0');
    });
    it('Hex with space should be converted to a hex', () => {
      expect(toHexChars(' #fff')).toStrictEqual('#ffffff');
    });
  });

  describe('toHexChars - Group', () => {
    it('string should be converted to a hex', () => {
      expect(toHexCharsGroup(['This is a test'])).toStrictEqual([]);
    });
    it('Hex with space should be converted to a hex', () => {
      expect(toHexCharsGroup([' #ff0aa0', ' #aa0aa0'])).toStrictEqual([
        '#ff0aa0',
        '#aa0aa0',
      ]);
    });
  });
});

describe('To', () => {
  describe('Hex', () => {
    it('Hex should convert to Hex', () => {
      expect(toHex('#000000')).toStrictEqual('#000000');
    });
    it('Cmyk should convert to Hex', () => {
      expect(toHex({ c: 0, m: 0, y: 0, k: 0 })).toStrictEqual('#ffffff');
    });
    it('Rgb should convert to Hex', () => {
      expect(toHex({ r: 0, g: 0, b: 0 })).toStrictEqual('#000000');
    });
    it('Hsl should convert to Hex', () => {
      expect(toHex({ h: 0, s: 0, l: 0 })).toStrictEqual('#000000');
    });
    it('Yuv should convert to Hex', () => {
      expect(toHex({ y: 0, u: 0, v: 0 })).toStrictEqual('#008600');
    });
  });
  describe('toCmyk', () => {
    it('Hex should convert to Cmyk', () => {
      expect(toCmyk('#000000')).toStrictEqual({
        c: 100,
        m: 100,
        y: 100,
        k: 100,
      });
    });
    it('Cmyk should convert to Cmyk', () => {
      expect(toCmyk({ c: 0, m: 0, y: 0, k: 0 })).toStrictEqual({
        c: 0,
        m: 0,
        y: 0,
        k: 0,
      });
    });
    it('Rgb should convert to Cmyk', () => {
      expect(toCmyk({ r: 0, g: 0, b: 0 })).toStrictEqual({
        c: 100,
        m: 100,
        y: 100,
        k: 100,
      });
    });
    it('Hsl should convert to Cmyk', () => {
      expect(toCmyk({ h: 0, s: 0, l: 0 })).toStrictEqual({
        c: 100,
        m: 100,
        y: 100,
        k: 100,
      });
    });
    it('Yuv should convert to Cmyk', () => {
      expect(toCmyk({ y: 0, u: 0, v: 0 })).toStrictEqual({
        c: 100,
        m: 0,
        y: 100,
        k: 47,
      });
    });
  });
  describe('toRgb', () => {
    it('Hex should convert to Rgb', () => {
      expect(toRgb('#000000')).toStrictEqual({
        r: 0,
        g: 0,
        b: 0,
      });
    });
    it('Cmyk should convert to Rgb', () => {
      expect(toRgb({ c: 0, m: 0, y: 0, k: 0 })).toStrictEqual({
        r: 255,
        g: 255,
        b: 255,
      });
    });
    it('Rgb should convert to Rgb', () => {
      expect(toRgb({ r: 0, g: 0, b: 0 })).toStrictEqual({
        r: 0,
        g: 0,
        b: 0,
      });
    });
    it('Hsl should convert to Rgb', () => {
      expect(toRgb({ h: 0, s: 0, l: 0 })).toStrictEqual({
        r: 0,
        g: 0,
        b: 0,
      });
    });
    it('Yuv should convert to Rgb', () => {
      expect(toRgb({ y: 0, u: 0, v: 0 })).toStrictEqual({
        r: 0,
        g: 134,
        b: 0,
      });
    });
  });
  describe('toHsl', () => {
    it('Hex should convert to Hsl', () => {
      expect(toHsl('#000000')).toStrictEqual({
        h: 0,
        s: 0,
        l: 0,
      });
    });
    it('Cmyk should convert to Hsl', () => {
      expect(toHsl({ c: 0, m: 0, y: 0, k: 0 })).toStrictEqual({
        h: 0,
        s: 0,
        l: 100,
      });
    });
    it('Rgb should convert to Hsl', () => {
      expect(toHsl({ r: 0, g: 0, b: 0 })).toStrictEqual({
        h: 0,
        s: 0,
        l: 0,
      });
    });
    it('Hsl should convert to Hsl', () => {
      expect(toHsl({ h: 0, s: 0, l: 0 })).toStrictEqual({
        h: 0,
        s: 0,
        l: 0,
      });
    });
    it('Yuv should convert to Hsl', () => {
      expect(toHsl({ y: 0, u: 0, v: 0 })).toStrictEqual({
        h: 120,
        s: 100,
        l: 26,
      });
    });
  });
  describe('toYuv', () => {
    it('Hex should convert to Yuv', () => {
      expect(toYuv('#000000')).toStrictEqual({
        y: 0,
        u: 128,
        v: 127,
      });
    });
    it('Cmyk should convert to Yuv', () => {
      expect(toYuv({ c: 0, m: 0, y: 0, k: 0 })).toStrictEqual({
        y: 255,
        u: 128,
        v: 127,
      });
    });
    it('Rgb should convert to Yuv', () => {
      expect(toYuv({ r: 0, g: 0, b: 0 })).toStrictEqual({
        y: 0,
        u: 128,
        v: 127,
      });
    });
    it('Hsl should convert to Yuv', () => {
      expect(toYuv({ h: 0, s: 0, l: 0 })).toStrictEqual({
        y: 0,
        u: 128,
        v: 127,
      });
    });
    it('Yuv should convert to Yuv', () => {
      expect(toYuv({ y: 0, u: 0, v: 0 })).toStrictEqual({
        y: 0,
        u: 0,
        v: 0,
      });
    });
  });
});
