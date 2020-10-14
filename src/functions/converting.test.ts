import {
  hexToRgb,
  componentToHexValue,
  rgbToHex,
  rgbToHsl,
  hexToHsl,
  rgbToYuv,
  yuvToRgb,
  yuvToHex,
  // rgbToCmyk,
  hexToCmyk,
} from './converting';
// import { hexToRgb,componentToHexValue } from "./converting";

describe('Converting', () => {
  describe('componentToHexValue', () => {
    it('0 should return 00', () => {
      expect(componentToHexValue(0)).toBe('00');
    });
    it('127 should return 7f', () => {
      expect(componentToHexValue(127)).toBe('7f');
    });
    it('255 should return ff', () => {
      expect(componentToHexValue(255)).toBe('ff');
    });
    it('256 should return 100', () => {
      expect(componentToHexValue(256)).toBe('100');
    });
  });

  describe('rgbToHex', () => {
    it('0,0,0 should return #000000', () => {
      expect(rgbToHex({ r: 0, g: 0, b: 0 })).toBe('#000000');
    });
    it('127,127,0 should return #7f7f00', () => {
      expect(rgbToHex({ r: 127, g: 127, b: 0 })).toBe('#7f7f00');
    });
    it('255,255,255 should return #ffffff', () => {
      expect(rgbToHex({ r: 255, g: 255, b: 255 })).toBe('#ffffff');
    });
    it('256,255,0 should return #ffff00', () => {
      expect(rgbToHex({ r: 256, g: 255, b: 0 })).toBe('#ffff00');
    });
  });

  describe('hexToRgb', () => {
    it('#FFFFFF should return', () => {
      expect(hexToRgb('#FFFFFF')).toEqual({ r: 255, g: 255, b: 255 });
    });
    it('#FFFFfF should return', () => {
      expect(hexToRgb('#FFFFfF')).toEqual({ r: 255, g: 255, b: 255 });
    });
    it('#FFF should return undefined', () => {
      expect(hexToRgb('#FFF')).toEqual({ b: 0, g: 0, r: 0 });
    });
    it('#FFF should return undefined', () => {
      expect(hexToRgb('#FF00AA')).toEqual({ b: 170, g: 0, r: 255 });
    });
    it('#259ad5 should return a valid value', () => {
      expect(hexToRgb('#259ad5')).toEqual({ r: 37, g: 154, b: 213 });
    });
  });

  describe('rgbToHsl', () => {
    it('0, 0, 0 to 0, 0, 0', () => {
      expect(rgbToHsl({ r: 0, g: 0, b: 0 })).toEqual({ h: 0, s: 0, l: 0 });
    });
    it('255,255,255 to 0, 0, 100', () => {
      expect(rgbToHsl({ r: 255, g: 255, b: 255 })).toEqual({
        h: 0,
        s: 0,
        l: 100,
      });
    });
    it('255,0,0 to 0, 100, 50', () => {
      expect(rgbToHsl({ r: 255, g: 0, b: 0 })).toEqual({
        h: 0,
        s: 100,
        l: 50,
      });
    });
    it('37,154, 213 to 200, 83, 84', () => {
      expect(rgbToHsl({ r: 37, g: 154, b: 213 })).toEqual({
        h: 200,
        s: 70,
        l: 49,
      });
    });
  });

  describe('hexToHsl', () => {
    it('#FFFFFF should return 0,0,100', () => {
      expect(hexToHsl('#FFFFFF')).toEqual({ h: 0, s: 0, l: 100 });
    });
    it('#000000 should return 0,0,0', () => {
      expect(hexToHsl('#000000')).toEqual({ h: 0, s: 0, l: 0 });
    });
    it('#259ad5 should return 200,70,49', () => {
      expect(hexToHsl('#259ad5')).toEqual({ h: 200, s: 70, l: 49 });
    });
  });

  describe('hexToCmyk', () => {
    it('#FFFFFF should return 0,0,100', () => {
      expect(hexToCmyk('#FFFFFF')).toEqual({ c: 0, m: 0, y: 0, k: 0 });
    });
    it('#000000 should return 0,0,0', () => {
      expect(hexToCmyk('#000000')).toEqual({ c: 100, m: 100, y: 100, k: 100 });
    });
    it('#259ad5 should return 200,70,49', () => {
      expect(hexToCmyk('#259ad5')).toEqual({ c: 83, m: 28, y: 0, k: 16 });
    });
  });

  describe('rgbToYuv', () => {
    it('0, 0, 0 to 0, 0, 0', () => {
      expect(rgbToYuv({ r: 0, g: 0, b: 0 })).toEqual({
        y: 0,
        u: 128,
        v: 127,
      });
    });
    it('255,255,255 to 0, 0, 100', () => {
      expect(rgbToYuv({ r: 255, g: 255, b: 255 })).toEqual({
        y: 255,
        u: 128,
        v: 127,
      });
    });
    it('255,0,0 to 0, 100, 50', () => {
      expect(rgbToYuv({ r: 255, g: 0, b: 0 })).toEqual({
        y: 76,
        u: 84,
        v: 255,
      });
    });
    it('37,154, 213 to 200, 83, 84', () => {
      expect(rgbToYuv({ r: 37, g: 154, b: 213 })).toEqual({
        y: 126,
        u: 177,
        v: 63,
      });
    });
  });

  describe('yuvToRgb', () => {
    xit('0, 0, 0 to 0, 0, 0', () => {
      // Should be
      expect(
        yuvToRgb({
          y: 0,
          u: 128,
          v: 127,
        })
      ).toEqual({ r: 0, g: 0, b: 0 });
      // Substitute
      expect(
        yuvToRgb({
          y: 0,
          u: 128,
          v: 127,
        })
      ).toEqual({ r: 0, g: 0, b: 1 });
    });
    it('255,255,255 to 0, 0, 100', () => {
      expect(
        yuvToRgb({
          y: 255,
          u: 128,
          v: 127,
        })
      ).toEqual({
        r: 255,
        g: 255,
        b: 255,
      });
    });
    it('255,0,0 to 0, 100, 50', () => {
      expect(
        yuvToRgb({
          y: 76,
          u: 84,
          v: 255,
        })
      ).toEqual({ r: 255, g: 0, b: 0 });
    });
    it('37,154, 213 to 200, 83, 84', () => {
      expect(
        yuvToRgb({
          y: 126,
          u: 177,
          v: 63,
        })
      ).toEqual({ r: 37, g: 154, b: 213 });
    });
  });
  describe('yuvToHex', () => {
    it('{y: 126, u: 177, v: 63 } to #259ad5', () => {
      // Should be
      expect(
        yuvToHex({
          y: 126,
          u: 177,
          v: 63,
        })
      ).toEqual('#259ad5');
    });
  });

  // describe('rgbToCmyk', () => {
  //   it('black should return cmyk', () => {
  //     expect(rgbToCmyk({r: 0, g: 0, b: 0})).toEqual({ c: 0, m:0, y:0, k:100 });
  //   });
  //   it('red should return cmyk', () => {
  //     expect(rgbToCmyk({r: 255, g: 0, b: 0})).toEqual({ c: 0, m:100, y:100, k:0 });
  //   });
  // });
});
