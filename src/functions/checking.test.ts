import { isHex } from "./checking";

describe("Checking", () => {
  describe("isHex", () => {
    it("#FFF should return false", () => {
      expect(isHex("#FFF")).toBeFalsy;
    });
    it("#FFFFFF should return true", () => {
      expect(isHex("#FFF")).toBeTruthy;
    });
    it("#ffffff should return true", () => {
      expect(isHex("#FFF")).toBeTruthy;
    });
    it("#GGGFFF should return false", () => {
      expect(isHex("#FFF")).toBeFalsy;
    });
    it("#000222 should return true", () => {
      expect(isHex("#FFF")).toBeTruthy;
    });
    it("#3232A11 should return false", () => {
      expect(isHex("#FFF")).toBeFalsy;
    });
    it("3232A11 should return false", () => {
      expect(isHex("#FFF")).toBeFalsy;
    });
  });
});
