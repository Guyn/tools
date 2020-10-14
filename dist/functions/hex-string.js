"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findHex = exports.toHexCharsGroup = exports.toHexChars = void 0;
var utils_1 = require("./utils");
var checking_1 = require("./checking");
exports.toHexChars = function (input) {
    var str = '#' +
        input
            .split('')
            .filter(function (c) { return checking_1.allowedHexCharacters.includes(c); })
            .join('');
    return utils_1.limitTo(str, 7, str.length == 4 ? str.substr(1, 4) : '0');
};
exports.toHexCharsGroup = function (input) {
    return input
        .map(function (v) { return (v = v.trim()); })
        .filter(function (v) { return v.charAt(0) == '#'; })
        .map(function (v) { return (v = exports.toHexChars(v)); });
};
exports.findHex = function (input) {
    return exports.toHexCharsGroup(input
        .split('') // Split the full string into characters
        .filter(function (c) { return checking_1.allowedHexCharacters + '#'.includes(c); }) // Remove all characters which cant be hex
        .join('') // Make it into one string again
        .split('#') // Split it up by the #
        .map(function (c) { return (c = '#' + c); }) // add the hash back to every code
    ).filter(function (h) { return input.includes(h) || input.includes(h.substr(0, 4)); });
}; // Check if the has exists in the input.
//# sourceMappingURL=hex-string.js.map