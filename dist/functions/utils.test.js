"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
describe('Utils', function () {
    describe('minMax', function () {
        it('0 should return 0', function () {
            expect(utils_1.minMax(0)).toBe(0);
        });
        it('255 should return 255', function () {
            expect(utils_1.minMax(255)).toBe(255);
        });
        it('100 should return 100', function () {
            expect(utils_1.minMax(100)).toBe(100);
        });
        it('-1 should return 0', function () {
            expect(utils_1.minMax(-1)).toBe(0);
        });
        it('256 should return 255', function () {
            expect(utils_1.minMax(256)).toBe(255);
        });
        it('-256 should return -256', function () {
            expect(utils_1.minMax(-256, -1000)).toBe(-256);
        });
        it('256 should return -256', function () {
            expect(utils_1.minMax(256, -1000, 100)).toBe(100);
        });
    });
    describe('limitTo', function () {
        it('String should be limited to 7 chars - untouched', function () {
            expect(utils_1.limitTo('This is', 7)).toBe('This is');
        });
        it('String should be limited to 7 chars - remove chars', function () {
            expect(utils_1.limitTo('This is a test', 7)).toBe('This is');
        });
        it('String should be limited to 7 chars - add spaces', function () {
            expect(utils_1.limitTo('This', 7)).toBe('This   ');
        });
        it("String should be limited to 7 chars - add 0's", function () {
            expect(utils_1.limitTo('#ae', 7, '0')).toBe('#ae0000');
        });
        it("String should be limited to 7 chars - add 0's (number)", function () {
            expect(utils_1.limitTo('#ae', 7, 0)).toBe('#ae0000');
        });
    });
    describe('isBetween', function () {
        it('10, 0, 100 should return true', function () {
            expect(utils_1.isBetween(10, 0, 100)).toBeTruthy;
        });
        it('10, 20, 100 should return false', function () {
            expect(utils_1.isBetween(10, 20, 100)).toBeFalsy;
        });
        it('110, 0, 100 should return false', function () {
            expect(utils_1.isBetween(10, 0, 100)).toBeFalsy;
        });
        it('-10, 0, 100 should return false', function () {
            expect(utils_1.isBetween(-10, 0, 100)).toBeFalsy;
        });
        it('-10, -20, 100 should return true', function () {
            expect(utils_1.isBetween(-10, -20, 100)).toBeTruthy;
        });
    });
    describe('isTruthy', function () {
        it('undefined should be false', function () {
            expect(utils_1.isTruthy(undefined)).toBeFalsy;
        });
        it('0 should be false', function () {
            expect(utils_1.isTruthy(0)).toBeFalsy;
        });
        it('-1 should be true', function () {
            expect(utils_1.isTruthy(-1)).toBeTruthy;
        });
        it('"" should be false', function () {
            expect(utils_1.isTruthy("")).toBeFalsy;
        });
        it('" " should be true', function () {
            expect(utils_1.isTruthy(" ")).toBeTruthy;
        });
        it('true should be true', function () {
            expect(utils_1.isTruthy(true)).toBeTruthy;
        });
        it('false should be true', function () {
            expect(utils_1.isTruthy(false)).toBeFalsy;
        });
        it('"false" should be true', function () {
            expect(utils_1.isTruthy("false")).toBeTruthy;
        });
    });
    describe('isFalsy', function () {
        it('undefined should be false', function () {
            expect(utils_1.isFalsy(undefined)).toBeTruthy;
        });
        it('0 should be false', function () {
            expect(utils_1.isFalsy(0)).toBeTruthy;
        });
        it('-1 should be true', function () {
            expect(utils_1.isFalsy(-1)).toBeFalsy;
        });
        it('"" should be false', function () {
            expect(utils_1.isFalsy("")).toBeTruthy;
        });
        it('" " should be true', function () {
            expect(utils_1.isFalsy(" ")).toBeFalsy;
        });
        it('true should be true', function () {
            expect(utils_1.isFalsy(true)).toBeFalsy;
        });
        it('false should be true', function () {
            expect(utils_1.isFalsy(false)).toBeTruthy;
        });
        it('"false" should be true', function () {
            expect(utils_1.isFalsy("false")).toBeFalsy;
        });
    });
});
//# sourceMappingURL=utils.test.js.map