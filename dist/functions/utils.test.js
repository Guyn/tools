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
});
//# sourceMappingURL=utils.test.js.map