import { toHexChars, toHexCharsGroup } from "./hex-string";

describe("Hex Convert", () => {
  describe("toHexChars", () => {
    it("string should be converted to a hex", () => {
      expect(toHexChars("This is a test")).toStrictEqual("#ae0000");
    });
    it("Hex with space should be converted to a hex", () => {
      expect(toHexChars(" #ff0aa0")).toStrictEqual("#ff0aa0");
    });
  });
  describe("toHexChars - Group", () => {
    it("string should be converted to a hex", () => {
      expect(toHexCharsGroup(["This is a test"])).toStrictEqual([]);
    });
    it("Hex with space should be converted to a hex", () => {
      expect(toHexCharsGroup([" #ff0aa0", " #aa0aa0"])).toStrictEqual([
        "#ff0aa0",
        "#aa0aa0",
      ]);
    });
  });
});
