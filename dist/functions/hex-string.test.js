"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hex_string_1 = require("./hex-string");
describe('Hex Convert', function () {
    describe('toHexChars', function () {
        it('string should be converted to a hex', function () {
            expect(hex_string_1.toHexChars('This is a test')).toStrictEqual('#ae0000');
        });
        it('Hex with space should be converted to a hex', function () {
            expect(hex_string_1.toHexChars(' #ff0aa0')).toStrictEqual('#ff0aa0');
        });
        it('Hex with space should be converted to a hex', function () {
            expect(hex_string_1.toHexChars(' #fff')).toStrictEqual('#ffffff');
        });
    });
    describe('toHexChars - Group', function () {
        it('string should be converted to a hex', function () {
            expect(hex_string_1.toHexCharsGroup(['This is a test'])).toStrictEqual([]);
        });
        it('Hex with space should be converted to a hex', function () {
            expect(hex_string_1.toHexCharsGroup([' #ff0aa0', ' #aa0aa0'])).toStrictEqual([
                '#ff0aa0',
                '#aa0aa0',
            ]);
        });
    });
    describe('findHex', function () {
        it('Find hex strings, single', function () {
            expect(hex_string_1.findHex('#aabbcc')).toStrictEqual(['#aabbcc']);
        });
        it('Find hex strings, multi', function () {
            expect(hex_string_1.findHex('#aabbcc#aabbcc#aabbcc')).toStrictEqual([
                '#aabbcc',
                '#aabbcc',
                '#aabbcc',
            ]);
        });
        it('Find hex strings, multi comma', function () {
            expect(hex_string_1.findHex('#aabbcc,#aabbcc,#aabbcc')).toStrictEqual([
                '#aabbcc',
                '#aabbcc',
                '#aabbcc',
            ]);
        });
        it('Find hex strings, multi comma space', function () {
            expect(hex_string_1.findHex('#aabbcc, #aabbcc, #aabbcc')).toStrictEqual([
                '#aabbcc',
                '#aabbcc',
                '#aabbcc',
            ]);
        });
        it('Find hex strings, multi spaced', function () {
            expect(hex_string_1.findHex('#aabbcc #aabbcc #aabbcc')).toStrictEqual([
                '#aabbcc',
                '#aabbcc',
                '#aabbcc',
            ]);
        });
        it('Find hex strings, multi spaced, last invalid', function () {
            expect(hex_string_1.findHex('#aabbcc #aabbcc #aggbcc')).toStrictEqual([
                '#aabbcc',
                '#aabbcc',
            ]);
        });
        it('Find hex strings, multi spaced, last invalid', function () {
            expect(hex_string_1.findHex('#aabbcc #aabbcc #aaa')).toStrictEqual([
                '#aabbcc',
                '#aabbcc',
                '#aaaaaa',
            ]);
        });
    });
});
//# sourceMappingURL=hex-string.test.js.map