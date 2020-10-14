"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hex_1 = require("./hex");
var cmyk_1 = require("./cmyk");
var rgb_1 = require("./rgb");
var hsl_1 = require("./hsl");
var yuv_1 = require("./yuv");
describe('Hex Convert', function () {
    describe('toHexChars', function () {
        it('string should be converted to a hex', function () {
            expect(hex_1.toHexChars('This is a test')).toStrictEqual('#ae0000');
        });
        it('Hex with space should be converted to a hex', function () {
            expect(hex_1.toHexChars(' #ff0aa0')).toStrictEqual('#ff0aa0');
        });
        it('Hex with space should be converted to a hex', function () {
            expect(hex_1.toHexChars(' #fff')).toStrictEqual('#ffffff');
        });
    });
    describe('toHexChars - Group', function () {
        it('string should be converted to a hex', function () {
            expect(hex_1.toHexCharsGroup(['This is a test'])).toStrictEqual([]);
        });
        it('Hex with space should be converted to a hex', function () {
            expect(hex_1.toHexCharsGroup([' #ff0aa0', ' #aa0aa0'])).toStrictEqual([
                '#ff0aa0',
                '#aa0aa0',
            ]);
        });
    });
});
describe('To', function () {
    describe('Hex', function () {
        it('Hex should convert to Hex', function () {
            expect(hex_1.toHex('#000000')).toStrictEqual('#000000');
        });
        it('Cmyk should convert to Hex', function () {
            expect(hex_1.toHex({ c: 0, m: 0, y: 0, k: 0 })).toStrictEqual('#ffffff');
        });
        it('Rgb should convert to Hex', function () {
            expect(hex_1.toHex({ r: 0, g: 0, b: 0 })).toStrictEqual('#000000');
        });
        it('Hsl should convert to Hex', function () {
            expect(hex_1.toHex({ h: 0, s: 0, l: 0 })).toStrictEqual('#000000');
        });
        it('Yuv should convert to Hex', function () {
            expect(hex_1.toHex({ y: 0, u: 0, v: 0 })).toStrictEqual('#008600');
        });
    });
    describe('toCmyk', function () {
        it('Hex should convert to Cmyk', function () {
            expect(cmyk_1.toCmyk('#000000')).toStrictEqual({
                c: 100,
                m: 100,
                y: 100,
                k: 100,
            });
        });
        it('Cmyk should convert to Cmyk', function () {
            expect(cmyk_1.toCmyk({ c: 0, m: 0, y: 0, k: 0 })).toStrictEqual({
                c: 0,
                m: 0,
                y: 0,
                k: 0,
            });
        });
        it('Rgb should convert to Cmyk', function () {
            expect(cmyk_1.toCmyk({ r: 0, g: 0, b: 0 })).toStrictEqual({
                c: 100,
                m: 100,
                y: 100,
                k: 100,
            });
        });
        it('Hsl should convert to Cmyk', function () {
            expect(cmyk_1.toCmyk({ h: 0, s: 0, l: 0 })).toStrictEqual({
                c: 100,
                m: 100,
                y: 100,
                k: 100,
            });
        });
        it('Yuv should convert to Cmyk', function () {
            expect(cmyk_1.toCmyk({ y: 0, u: 0, v: 0 })).toStrictEqual({
                c: 100,
                m: 0,
                y: 100,
                k: 47,
            });
        });
    });
    describe('toRgb', function () {
        it('Hex should convert to Rgb', function () {
            expect(rgb_1.toRgb('#000000')).toStrictEqual({
                r: 0,
                g: 0,
                b: 0,
            });
        });
        it('Cmyk should convert to Rgb', function () {
            expect(rgb_1.toRgb({ c: 0, m: 0, y: 0, k: 0 })).toStrictEqual({
                r: 255,
                g: 255,
                b: 255,
            });
        });
        it('Rgb should convert to Rgb', function () {
            expect(rgb_1.toRgb({ r: 0, g: 0, b: 0 })).toStrictEqual({
                r: 0,
                g: 0,
                b: 0,
            });
        });
        it('Hsl should convert to Rgb', function () {
            expect(rgb_1.toRgb({ h: 0, s: 0, l: 0 })).toStrictEqual({
                r: 0,
                g: 0,
                b: 0,
            });
        });
        it('Yuv should convert to Rgb', function () {
            expect(rgb_1.toRgb({ y: 0, u: 0, v: 0 })).toStrictEqual({
                r: 0,
                g: 134,
                b: 0,
            });
        });
    });
    describe('toHsl', function () {
        it('Hex should convert to Hsl', function () {
            expect(hsl_1.toHsl('#000000')).toStrictEqual({
                h: 0,
                s: 0,
                l: 0,
            });
        });
        it('Cmyk should convert to Hsl', function () {
            expect(hsl_1.toHsl({ c: 0, m: 0, y: 0, k: 0 })).toStrictEqual({
                h: 0,
                s: 0,
                l: 100,
            });
        });
        it('Rgb should convert to Hsl', function () {
            expect(hsl_1.toHsl({ r: 0, g: 0, b: 0 })).toStrictEqual({
                h: 0,
                s: 0,
                l: 0,
            });
        });
        it('Hsl should convert to Hsl', function () {
            expect(hsl_1.toHsl({ h: 0, s: 0, l: 0 })).toStrictEqual({
                h: 0,
                s: 0,
                l: 0,
            });
        });
        it('Yuv should convert to Hsl', function () {
            expect(hsl_1.toHsl({ y: 0, u: 0, v: 0 })).toStrictEqual({
                h: 120,
                s: 100,
                l: 26,
            });
        });
    });
    describe('toYuv', function () {
        it('Hex should convert to Yuv', function () {
            expect(yuv_1.toYuv('#000000')).toStrictEqual({
                y: 0,
                u: 128,
                v: 127,
            });
        });
        it('Cmyk should convert to Yuv', function () {
            expect(yuv_1.toYuv({ c: 0, m: 0, y: 0, k: 0 })).toStrictEqual({
                y: 255,
                u: 128,
                v: 127,
            });
        });
        it('Rgb should convert to Yuv', function () {
            expect(yuv_1.toYuv({ r: 0, g: 0, b: 0 })).toStrictEqual({
                y: 0,
                u: 128,
                v: 127,
            });
        });
        it('Hsl should convert to Yuv', function () {
            expect(yuv_1.toYuv({ h: 0, s: 0, l: 0 })).toStrictEqual({
                y: 0,
                u: 128,
                v: 127,
            });
        });
        it('Yuv should convert to Yuv', function () {
            expect(yuv_1.toYuv({ y: 0, u: 0, v: 0 })).toStrictEqual({
                y: 0,
                u: 0,
                v: 0,
            });
        });
    });
});
//# sourceMappingURL=space.test.js.map