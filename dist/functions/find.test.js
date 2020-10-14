"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var find_1 = require("./find");
describe('Hex Convert', function () {
    describe('getColorDistance', function () {
        it('Should be a maxed out distance', function () {
            var input = { r: 0, g: 0, b: 0 };
            var compare = { r: 255, g: 255, b: 255 };
            expect(find_1.getColorDistance(input, compare)).toBe(442);
        });
        it('Should be no distance', function () {
            var input = { r: 0, g: 0, b: 0 };
            var compare = { r: 0, g: 0, b: 0 };
            expect(find_1.getColorDistance(input, compare)).toBe(0);
        });
        it('Should be full lightness distance', function () {
            var input = { r: 255, g: 0, b: 0 };
            var compare = { r: 0, g: 255, b: 0 };
            expect(find_1.getColorDistance(input, compare)).toBe(361);
        });
        it('Should be full lightness distance', function () {
            var input = { r: 0, g: 0, b: 255 };
            var compare = { r: 0, g: 255, b: 0 };
            expect(find_1.getColorDistance(input, compare)).toBe(361);
        });
        it('Should be full lightness distance', function () {
            var input = { r: 0, g: 0, b: 255 };
            var compare = { r: 0, g: 255, b: 0 };
            expect(find_1.getColorDistance(input, compare)).toBe(361);
        });
    });
    describe('findHex', function () {
        it('Find hex strings, single', function () {
            expect(find_1.findHex('#aabbcc')).toStrictEqual(['#aabbcc']);
        });
        it('Find hex strings, multi', function () {
            expect(find_1.findHex('#aabbcc#aabbcc#aabbcc')).toStrictEqual([
                '#aabbcc',
                '#aabbcc',
                '#aabbcc',
            ]);
        });
        it('Find hex strings, multi comma', function () {
            expect(find_1.findHex('#aabbcc,#aabbcc,#aabbcc')).toStrictEqual([
                '#aabbcc',
                '#aabbcc',
                '#aabbcc',
            ]);
        });
        it('Find hex strings, multi comma space', function () {
            expect(find_1.findHex('#aabbcc, #aabbcc, #aabbcc')).toStrictEqual([
                '#aabbcc',
                '#aabbcc',
                '#aabbcc',
            ]);
        });
        it('Find hex strings, multi spaced', function () {
            expect(find_1.findHex('#aabbcc #aabbcc #aabbcc')).toStrictEqual([
                '#aabbcc',
                '#aabbcc',
                '#aabbcc',
            ]);
        });
        it('Find hex strings, multi spaced, last invalid', function () {
            expect(find_1.findHex('#aabbcc #aabbcc #aggbcc')).toStrictEqual([
                '#aabbcc',
                '#aabbcc',
            ]);
        });
        it('Find hex strings, multi spaced, last invalid', function () {
            expect(find_1.findHex('#aabbcc #aabbcc #aaa')).toStrictEqual([
                '#aabbcc',
                '#aabbcc',
                '#aaaaaa',
            ]);
        });
    });
});
//# sourceMappingURL=find.test.js.map