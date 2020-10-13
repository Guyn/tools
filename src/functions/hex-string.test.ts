import { toHexChars, toHexCharsGroup, findHex } from "./hex-string";

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
  describe("findHex", () => {
    it("Find hex strings, single", () => {
      expect(findHex("#aabbcc")).toStrictEqual(["#aabbcc"]);
    });
    it("Find hex strings, multi", () => {
      expect(findHex("#aabbcc#aabbcc#aabbcc")).toStrictEqual([
        "#aabbcc",
        "#aabbcc",
        "#aabbcc",
      ]);
    });
    it("Find hex strings, multi comma", () => {
      expect(findHex("#aabbcc,#aabbcc,#aabbcc")).toStrictEqual([
        "#aabbcc",
        "#aabbcc",
        "#aabbcc",
      ]);
    });
    it("Find hex strings, multi comma space", () => {
      expect(findHex("#aabbcc, #aabbcc, #aabbcc")).toStrictEqual([
        "#aabbcc",
        "#aabbcc",
        "#aabbcc",
      ]);
    });
    it("Find hex strings, multi spaced", () => {
      expect(findHex("#aabbcc #aabbcc #aabbcc")).toStrictEqual([
        "#aabbcc",
        "#aabbcc",
        "#aabbcc",
      ]);
    });
    it("Find hex strings, multi spaced, last invalid", () => {
      expect(findHex("#aabbcc #aabbcc #aggbcc")).toStrictEqual([
        "#aabbcc",
        "#aabbcc",
      ]);
    });
    it("Find hex strings, multi spaced, last invalid", () => {
      expect(findHex("#aabbcc #aabbcc #aaa")).toStrictEqual([
        "#aabbcc",
        "#aabbcc",
      ]);
    });
  });
});
