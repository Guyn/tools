import { componentToHexValue, rgbToHex } from "./converting";
// import { hexToRgb,componentToHexValue } from "./converting";

describe("Converting", () => {
  describe("componentToHexValue", () => {
    it("0 should return 00", () => {
      expect(componentToHexValue(0)).toBe("00");
    });
    it("127 should return 7f", () => {
      expect(componentToHexValue(127)).toBe("7f");
    });
    it("255 should return ff", () => {
      expect(componentToHexValue(255)).toBe("ff");
    });
    it("256 should return 100", () => {
      expect(componentToHexValue(256)).toBe("100");
    });
  });

  describe("rgbToHex", () => {
    it("0,0,0 should return #000000", () => {
      expect(rgbToHex({ r: 0, g: 0, b: 0 })).toBe("#000000");
    });
    it("127,127,0 should return #7f7f00", () => {
      expect(rgbToHex({ r: 127, g: 127, b: 0 })).toBe("#7f7f00");
    });
    it("255,255,255 should return #ffffff", () => {
      expect(rgbToHex({ r: 255, g: 255, b: 255 })).toBe("#ffffff");
    });
    it("256,255,0 should return #ffff00", () => {
      expect(rgbToHex({ r: 256, g: 255, b: 0 })).toBe("#ffff00");
    });
  });

  //   describe("hexToRgb", () => {
  //     it("#FFFFFF should return", () => {
  //       expect(hexToRgb("#FFFFFF")).toEqual({ r: 255, g: 255, b: 255 });
  //     });
  //     it("#FFFFfF should return", () => {
  //       expect(hexToRgb("#FFFFfF")).toEqual({ r: 255, g: 255, b: 255 });
  //     });
  //     it("#FFF should return undefined", () => {
  //       expect(hexToRgb("#FFF")).toBeUndefined;
  //     });
  //   });
});
