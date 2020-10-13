"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHexCharsGroup = exports.toHexChars = void 0;
var utils_1 = require("./utils");
var checking_1 = require("./checking");
exports.toHexChars = function (input) {
    return utils_1.limitTo("#" +
        input
            .split("")
            .filter(function (c) { return checking_1.allowedHexCharacters.includes(c); })
            .join(""), 7, "0");
};
exports.toHexCharsGroup = function (input) {
    return input
        .map(function (v) { return (v = v.trim()); })
        .filter(function (v) { return v.charAt(0) == "#"; })
        .map(function (v) { return (v = exports.toHexChars(v)); });
};
//# sourceMappingURL=hex-string.js.map