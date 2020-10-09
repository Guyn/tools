"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minMax = void 0;
exports.minMax = function (input, min, max) {
    if (input === void 0) { input = 0; }
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 255; }
    return Math.min(Math.max(input, min), max);
};
//# sourceMappingURL=utils.js.map