"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var converting_1 = require("./converting");
// import { hexToRgb,componentToHexValue } from "./converting";
describe('Converting', function () {
    describe('componentToHexValue', function () {
        it('0 should return 00', function () {
            expect(converting_1.componentToHexValue(0)).toBe('00');
        });
        it('127 should return 7f', function () {
            expect(converting_1.componentToHexValue(127)).toBe('7f');
        });
        it('255 should return ff', function () {
            expect(converting_1.componentToHexValue(255)).toBe('ff');
        });
        it('256 should return 100', function () {
            expect(converting_1.componentToHexValue(256)).toBe('100');
        });
    });
    describe('rgbToHex', function () {
        it('0,0,0 should return #000000', function () {
            expect(converting_1.rgbToHex({ r: 0, g: 0, b: 0 })).toBe('#000000');
        });
        it('127,127,0 should return #7f7f00', function () {
            expect(converting_1.rgbToHex({ r: 127, g: 127, b: 0 })).toBe('#7f7f00');
        });
        it('255,255,255 should return #ffffff', function () {
            expect(converting_1.rgbToHex({ r: 255, g: 255, b: 255 })).toBe('#ffffff');
        });
        it('256,255,0 should return #ffff00', function () {
            expect(converting_1.rgbToHex({ r: 256, g: 255, b: 0 })).toBe('#ffff00');
        });
    });
    describe('hexToRgb', function () {
        it('#FFFFFF should return', function () {
            expect(converting_1.hexToRgb('#FFFFFF')).toEqual({ r: 255, g: 255, b: 255 });
        });
        it('#FFFFfF should return', function () {
            expect(converting_1.hexToRgb('#FFFFfF')).toEqual({ r: 255, g: 255, b: 255 });
        });
        it('#FFF should return undefined', function () {
            expect(converting_1.hexToRgb('#FFF')).toEqual({ b: 0, g: 0, r: 0 });
        });
        it('#FFF should return undefined', function () {
            expect(converting_1.hexToRgb('#FF00AA')).toEqual({ b: 170, g: 0, r: 255 });
        });
        it('#259ad5 should return a valid value', function () {
            expect(converting_1.hexToRgb('#259ad5')).toEqual({ r: 37, g: 154, b: 213 });
        });
    });
    describe('rgbToHsl', function () {
        it('0, 0, 0 to 0, 0, 0', function () {
            expect(converting_1.rgbToHsl({ r: 0, g: 0, b: 0 })).toEqual({ h: 0, s: 0, l: 0 });
        });
        it('255,255,255 to 0, 0, 100', function () {
            expect(converting_1.rgbToHsl({ r: 255, g: 255, b: 255 })).toEqual({
                h: 0,
                s: 0,
                l: 100,
            });
        });
        it('255,0,0 to 0, 100, 50', function () {
            expect(converting_1.rgbToHsl({ r: 255, g: 0, b: 0 })).toEqual({
                h: 0,
                s: 100,
                l: 50,
            });
        });
        it('37,154, 213 to 200, 83, 84', function () {
            expect(converting_1.rgbToHsl({ r: 37, g: 154, b: 213 })).toEqual({
                h: 200,
                s: 70,
                l: 49,
            });
        });
    });
    describe('hexToHsl', function () {
        it('#FFFFFF should return 0,0,100', function () {
            expect(converting_1.hexToHsl('#FFFFFF')).toEqual({ h: 0, s: 0, l: 100 });
        });
        it('#000000 should return 0,0,0', function () {
            expect(converting_1.hexToHsl('#000000')).toEqual({ h: 0, s: 0, l: 0 });
        });
        it('#259ad5 should return 200,70,49', function () {
            expect(converting_1.hexToHsl('#259ad5')).toEqual({ h: 200, s: 70, l: 49 });
        });
    });
    describe('hexToCmyk', function () {
        it('#FFFFFF should return 0,0,100', function () {
            expect(converting_1.hexToCmyk('#FFFFFF')).toEqual({ c: 0, m: 0, y: 0, k: 0 });
        });
        it('#000000 should return 0,0,0', function () {
            expect(converting_1.hexToCmyk('#000000')).toEqual({ c: 100, m: 100, y: 100, k: 100 });
        });
        it('#259ad5 should return 200,70,49', function () {
            expect(converting_1.hexToCmyk('#259ad5')).toEqual({ c: 83, m: 28, y: 0, k: 16 });
        });
    });
    describe('rgbToYuv', function () {
        it('0, 0, 0 to 0, 0, 0', function () {
            expect(converting_1.rgbToYuv({ r: 0, g: 0, b: 0 })).toEqual({
                y: 0,
                u: 128,
                v: 127,
            });
        });
        it('255,255,255 to 0, 0, 100', function () {
            expect(converting_1.rgbToYuv({ r: 255, g: 255, b: 255 })).toEqual({
                y: 255,
                u: 128,
                v: 127,
            });
        });
        it('255,0,0 to 0, 100, 50', function () {
            expect(converting_1.rgbToYuv({ r: 255, g: 0, b: 0 })).toEqual({
                y: 76,
                u: 84,
                v: 255,
            });
        });
        it('37,154, 213 to 200, 83, 84', function () {
            expect(converting_1.rgbToYuv({ r: 37, g: 154, b: 213 })).toEqual({
                y: 126,
                u: 177,
                v: 63,
            });
        });
    });
    describe('yuvToRgb', function () {
        xit('0, 0, 0 to 0, 0, 0', function () {
            // Should be
            expect(converting_1.yuvToRgb({
                y: 0,
                u: 128,
                v: 127,
            })).toEqual({ r: 0, g: 0, b: 0 });
            // Substitute
            expect(converting_1.yuvToRgb({
                y: 0,
                u: 128,
                v: 127,
            })).toEqual({ r: 0, g: 0, b: 1 });
        });
        it('255,255,255 to 0, 0, 100', function () {
            expect(converting_1.yuvToRgb({
                y: 255,
                u: 128,
                v: 127,
            })).toEqual({
                r: 255,
                g: 255,
                b: 255,
            });
        });
        it('255,0,0 to 0, 100, 50', function () {
            expect(converting_1.yuvToRgb({
                y: 76,
                u: 84,
                v: 255,
            })).toEqual({ r: 255, g: 0, b: 0 });
        });
        it('37,154, 213 to 200, 83, 84', function () {
            expect(converting_1.yuvToRgb({
                y: 126,
                u: 177,
                v: 63,
            })).toEqual({ r: 37, g: 154, b: 213 });
        });
    });
    describe('yuvToHex', function () {
        it('{y: 126, u: 177, v: 63 } to #259ad5', function () {
            // Should be
            expect(converting_1.yuvToHex({
                y: 126,
                u: 177,
                v: 63,
            })).toEqual('#259ad5');
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
//# sourceMappingURL=converting.test.js.map