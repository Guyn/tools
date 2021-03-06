import { isHex, isObjectString, isRgb } from './checking';

describe('Checking', () => {
  describe('isHex', () => {
    it('#FFF should return false', () => {
      expect(isHex('#FFF')).toBe(false);
    });
    it('#FFFFFF should return true', () => {
      expect(isHex('#FFFFFF')).toBe(true);
    });
    it('#ffffff should return true', () => {
      expect(isHex('#ffffff')).toBe(true);
    });
    it('#00000f should return true', () => {
      expect(isHex('#00000f')).toBe(true);
    });
    it('#GGGFFF should return false', () => {
      expect(isHex('#GGGFFF')).toBe(false);
    });
    it('#fffffff should return false', () => {
      expect(isHex('#fffffff')).toBe(false);
    });
    it('#000222 should return true', () => {
      expect(isHex('#000222')).toBe(true);
    });
    it('#3232A11 should return false', () => {
      expect(isHex('#3232A11')).toBe(false);
    });
    it('3232A11 should return false', () => {
      expect(isHex('3232A11')).toBe(false);
    });
    it('#259ad5 should return true', () => {
      expect(isHex('#259ad5')).toBe(true);
    });
  });
  describe('isRgb', () => {
    it('#FFF should return false', () => {
      expect(isRgb('#FFF')).toBe(false);
    });
    it('{r: 0, g: 0, b: 0}:Object should return true', () => {
      expect(isRgb({ r: 0, g: 0, b: 0 })).toBe(true);
    });
    it('{r: 255, g: 255, b: 255}:Object should return true', () => {
      expect(isRgb({ r: 255, g: 255, b: 255 })).toBe(true);
    });
    it('{r: 255, g: 255, b: 256}:Object should return true', () => {
      expect(isRgb({ r: 255, g: 255, b: 256 })).toBe(false);
    });
    it('{r: 255, g: 255, b: 255, a: 0}:Object should return true', () => {
      expect(isRgb({ r: 255, g: 255, b: 256, a: 0 })).toBe(false);
    });
    it('{c: 255, m: 255, y: 256}:Object should return true', () => {
      expect(isRgb({ c: 255, m: 255, y: 256 })).toBe(false);
    });
    it('[255,0,0]:Array should return false', () => {
      expect(isRgb({ c: 255, m: 255, y: 256 })).toBe(false);
    });
  });

  describe('isObject', () => {
    it('string should return false', () => {
      expect(isObjectString('test')).toBe(false);
    });
    it('array should return false', () => {
      expect(isObjectString("['test']")).toBe(false);
    });
    it('empty object string should return true', () => {
      expect(isObjectString('{}')).toBe(true);
    });
    it('empty array string should return true', () => {
      expect(isObjectString('[]')).toBe(true);
    });
    it('object single quotes should return false', () => {
      expect(isObjectString("{'test':'test'}")).toBe(false);
    });
    it('object double quotes should return true', () => {
      expect(isObjectString('{"test":"test"}')).toBe(true);
    });
    it('object double quotes escaped should return true', () => {
      // prettier-ignore
      expect(isObjectString("{\"test\":\"test\"}")).toBe(true);
    });
    it('actual object should return false', () => {
      expect(isObjectString({ test: 'test' } as any)).toBe(false);
    });
  });
});
