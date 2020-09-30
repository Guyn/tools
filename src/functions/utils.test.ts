import { minmax } from "./utils";
describe("Utils", () => {
  describe("minmax", () => {
    it("0 should return 0", () => {
      expect(minmax(0)).toBe(0);
    });
    it("255 should return 255", () => {
      expect(minmax(255)).toBe(255);
    });
    it("100 should return 100", () => {
      expect(minmax(100)).toBe(100);
    });
    it("-1 should return 0", () => {
      expect(minmax(-1)).toBe(0);
    });
    it("256 should return 255", () => {
      expect(minmax(256)).toBe(255);
    });
    it("-256 should return -256", () => {
      expect(minmax(-256, -1000)).toBe(-256);
    });
    it("256 should return -256", () => {
      expect(minmax(256, -1000, 100)).toBe(100);
    });
  });
});
