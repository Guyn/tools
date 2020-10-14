"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColorDistance = exports.findHex = void 0;
var variables_1 = require("./variables");
var hex_1 = require("./space/hex");
exports.findHex = function (input) {
    return hex_1.toHexCharsGroup(input
        .split('') // Split the full string into characters
        .filter(function (c) { return variables_1.allowedHexCharacters + '#'.includes(c); }) // Remove all characters which cant be hex
        .join('') // Make it into one string again
        .split('#') // Split it up by the #
        .map(function (c) { return (c = '#' + c); }) // add the hash back to every code
    ).filter(function (h) { return input.includes(h) || input.includes(h.substr(0, 4)); });
}; // Check if the has exists in the input.
exports.getColorDistance = function (input, compare) {
    var sumOfSquares = 0;
    sumOfSquares += Math.pow(input.r - compare.r, 2);
    sumOfSquares += Math.pow(input.g - compare.g, 2);
    sumOfSquares += Math.pow(input.b - compare.b, 2);
    return Math.round(Math.sqrt(sumOfSquares));
};
//# sourceMappingURL=find.js.map