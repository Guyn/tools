"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minmax = void 0;
exports.minmax = function (input, min, max) {
    if (input === void 0) { input = 0; }
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 255; }
    return Math.min(Math.max(input, min), max);
};
//# sourceMappingURL=utils.js.map