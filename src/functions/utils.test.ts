import { minMax, limitTo } from './utils';
describe('Utils', () => {
  describe('minMax', () => {
    it('0 should return 0', () => {
      expect(minMax(0)).toBe(0);
    });
    it('255 should return 255', () => {
      expect(minMax(255)).toBe(255);
    });
    it('100 should return 100', () => {
      expect(minMax(100)).toBe(100);
    });
    it('-1 should return 0', () => {
      expect(minMax(-1)).toBe(0);
    });
    it('256 should return 255', () => {
      expect(minMax(256)).toBe(255);
    });
    it('-256 should return -256', () => {
      expect(minMax(-256, -1000)).toBe(-256);
    });
    it('256 should return -256', () => {
      expect(minMax(256, -1000, 100)).toBe(100);
    });
  });
  describe('limitTo', () => {
    it('String should be limited to 7 chars - untouched', () => {
      expect(limitTo('This is', 7)).toBe('This is');
    });
    it('String should be limited to 7 chars - remove chars', () => {
      expect(limitTo('This is a test', 7)).toBe('This is');
    });
    it('String should be limited to 7 chars - add spaces', () => {
      expect(limitTo('This', 7)).toBe('This   ');
    });
    it("String should be limited to 7 chars - add 0's", () => {
      expect(limitTo('#ae', 7, '0')).toBe('#ae0000');
    });
    it("String should be limited to 7 chars - add 0's (number)", () => {
      expect(limitTo('#ae', 7, 0)).toBe('#ae0000');
    });
  });
});
