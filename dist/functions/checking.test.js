"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checking_1 = require("./checking");
describe("Checking", function () {
    describe("isHex", function () {
        it("#FFF should return false", function () {
            expect(checking_1.isHex("#FFF")).toBeFalsy;
        });
        it("#FFFFFF should return true", function () {
            expect(checking_1.isHex("#FFF")).toBeTruthy;
        });
        it("#ffffff should return true", function () {
            expect(checking_1.isHex("#FFF")).toBeTruthy;
        });
        it("#GGGFFF should return false", function () {
            expect(checking_1.isHex("#FFF")).toBeFalsy;
        });
        it("#000222 should return true", function () {
            expect(checking_1.isHex("#FFF")).toBeTruthy;
        });
        it("#3232A11 should return false", function () {
            expect(checking_1.isHex("#FFF")).toBeFalsy;
        });
        it("3232A11 should return false", function () {
            expect(checking_1.isHex("#FFF")).toBeFalsy;
        });
    });
});
//# sourceMappingURL=checking.test.js.map