"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var converting_1 = require("./converting");
// import { hexToRgb,componentToHexValue } from "./converting";
describe("Converting", function () {
    describe("componentToHexValue", function () {
        it("0 should return 00", function () {
            expect(converting_1.componentToHexValue(0)).toBe("00");
        });
        it("127 should return 7f", function () {
            expect(converting_1.componentToHexValue(127)).toBe("7f");
        });
        it("255 should return ff", function () {
            expect(converting_1.componentToHexValue(255)).toBe("ff");
        });
        it("256 should return 100", function () {
            expect(converting_1.componentToHexValue(256)).toBe("100");
        });
    });
    describe("rgbToHex", function () {
        it("0,0,0 should return #000000", function () {
            expect(converting_1.rgbToHex({ r: 0, g: 0, b: 0 })).toBe("#000000");
        });
        it("127,127,0 should return #7f7f00", function () {
            expect(converting_1.rgbToHex({ r: 127, g: 127, b: 0 })).toBe("#7f7f00");
        });
        it("255,255,255 should return #ffffff", function () {
            expect(converting_1.rgbToHex({ r: 255, g: 255, b: 255 })).toBe("#ffffff");
        });
        it("256,255,0 should return #ffff00", function () {
            expect(converting_1.rgbToHex({ r: 256, g: 255, b: 0 })).toBe("#ffff00");
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
//# sourceMappingURL=converting.test.js.map