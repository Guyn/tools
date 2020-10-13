"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hex_string_1 = require("./hex-string");
describe("Hex Convert", function () {
    describe("toHexChars", function () {
        it("string should be converted to a hex", function () {
            expect(hex_string_1.toHexChars("This is a test")).toStrictEqual("#ae0000");
        });
        it("Hex with space should be converted to a hex", function () {
            expect(hex_string_1.toHexChars(" #ff0aa0")).toStrictEqual("#ff0aa0");
        });
    });
    describe("toHexChars - Group", function () {
        it("string should be converted to a hex", function () {
            expect(hex_string_1.toHexCharsGroup(["This is a test"])).toStrictEqual([]);
        });
        it("Hex with space should be converted to a hex", function () {
            expect(hex_string_1.toHexCharsGroup([" #ff0aa0", " #aa0aa0"])).toStrictEqual([
                "#ff0aa0",
                "#aa0aa0",
            ]);
        });
    });
});
//# sourceMappingURL=hex-string.test.js.map