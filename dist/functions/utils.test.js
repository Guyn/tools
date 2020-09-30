"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
describe("Utils", function () {
    describe("minmax", function () {
        it("0 should return 0", function () {
            expect(utils_1.minmax(0)).toBe(0);
        });
        it("255 should return 255", function () {
            expect(utils_1.minmax(255)).toBe(255);
        });
        it("100 should return 100", function () {
            expect(utils_1.minmax(100)).toBe(100);
        });
        it("-1 should return 0", function () {
            expect(utils_1.minmax(-1)).toBe(0);
        });
        it("256 should return 255", function () {
            expect(utils_1.minmax(256)).toBe(255);
        });
        it("-256 should return -256", function () {
            expect(utils_1.minmax(-256, -1000)).toBe(-256);
        });
        it("256 should return -256", function () {
            expect(utils_1.minmax(256, -1000, 100)).toBe(100);
        });
    });
});
//# sourceMappingURL=utils.test.js.map