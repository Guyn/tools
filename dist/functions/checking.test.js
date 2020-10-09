"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checking_1 = require("./checking");
describe("Checking", function () {
    describe("isHex", function () {
        it("#FFF should return false", function () {
            expect(checking_1.isHex("#FFF")).toBe(false);
        });
        it("#FFFFFF should return true", function () {
            expect(checking_1.isHex("#FFFFFF")).toBe(true);
        });
        it("#ffffff should return true", function () {
            expect(checking_1.isHex("#ffffff")).toBe(true);
        });
        it("#00000f should return true", function () {
            expect(checking_1.isHex("#00000f")).toBe(true);
        });
        it("#GGGFFF should return false", function () {
            expect(checking_1.isHex("#GGGFFF")).toBe(false);
        });
        it("#fffffff should return false", function () {
            expect(checking_1.isHex("#fffffff")).toBe(false);
        });
        it("#000222 should return true", function () {
            expect(checking_1.isHex("#000222")).toBe(true);
        });
        it("#3232A11 should return false", function () {
            expect(checking_1.isHex("#3232A11")).toBe(false);
        });
        it("3232A11 should return false", function () {
            expect(checking_1.isHex("3232A11")).toBe(false);
        });
    });
    describe("isObject", function () {
        it("string should return false", function () {
            expect(checking_1.isObjectString("test")).toBe(false);
        });
        it("array should return false", function () {
            expect(checking_1.isObjectString("['test']")).toBe(false);
        });
        it("empty object string should return true", function () {
            expect(checking_1.isObjectString("{}")).toBe(true);
        });
        it("empty array string should return true", function () {
            expect(checking_1.isObjectString("[]")).toBe(true);
        });
        it("object single quotes should return false", function () {
            expect(checking_1.isObjectString("{'test':'test'}")).toBe(false);
        });
        it("object double quotes should return true", function () {
            expect(checking_1.isObjectString('{"test":"test"}')).toBe(true);
        });
        it("object double quotes escaped should return true", function () {
            // prettier-ignore
            expect(checking_1.isObjectString("{\"test\":\"test\"}")).toBe(true);
        });
        it("actual object should return false", function () {
            expect(checking_1.isObjectString({ test: "test" })).toBe(false);
        });
    });
});
//# sourceMappingURL=checking.test.js.map