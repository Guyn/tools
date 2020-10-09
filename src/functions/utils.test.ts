import { minMax } from "./utils";
describe("Utils", () => {
  describe("minMax", () => {
    it("0 should return 0", () => {
      expect(minMax(0)).toBe(0);
    });
    it("255 should return 255", () => {
      expect(minMax(255)).toBe(255);
    });
    it("100 should return 100", () => {
      expect(minMax(100)).toBe(100);
    });
    it("-1 should return 0", () => {
      expect(minMax(-1)).toBe(0);
    });
    it("256 should return 255", () => {
      expect(minMax(256)).toBe(255);
    });
    it("-256 should return -256", () => {
      expect(minMax(-256, -1000)).toBe(-256);
    });
    it("256 should return -256", () => {
      expect(minMax(256, -1000, 100)).toBe(100);
    });
  });
});
