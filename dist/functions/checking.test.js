"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checking_1 = require("./checking");
describe('Checking', function () {
    describe('isHex', function () {
        it('#FFF should return false', function () {
            expect(checking_1.isHex('#FFF')).toBe(false);
        });
        it('#FFFFFF should return true', function () {
            expect(checking_1.isHex('#FFFFFF')).toBe(true);
        });
        it('#ffffff should return true', function () {
            expect(checking_1.isHex('#ffffff')).toBe(true);
        });
        it('#00000f should return true', function () {
            expect(checking_1.isHex('#00000f')).toBe(true);
        });
        it('#GGGFFF should return false', function () {
            expect(checking_1.isHex('#GGGFFF')).toBe(false);
        });
        it('#fffffff should return false', function () {
            expect(checking_1.isHex('#fffffff')).toBe(false);
        });
        it('#000222 should return true', function () {
            expect(checking_1.isHex('#000222')).toBe(true);
        });
        it('#3232A11 should return false', function () {
            expect(checking_1.isHex('#3232A11')).toBe(false);
        });
        it('3232A11 should return false', function () {
            expect(checking_1.isHex('3232A11')).toBe(false);
        });
        it('#259ad5 should return true', function () {
            expect(checking_1.isHex('#259ad5')).toBe(true);
        });
    });
    describe('isRgb', function () {
        it('#FFF should return false', function () {
            expect(checking_1.isRgb('#FFF')).toBe(false);
        });
        it('{r: 0, g: 0, b: 0}:Object should return true', function () {
            expect(checking_1.isRgb({ r: 0, g: 0, b: 0 })).toBe(true);
        });
        it('{r: 255, g: 255, b: 255}:Object should return true', function () {
            expect(checking_1.isRgb({ r: 255, g: 255, b: 255 })).toBe(true);
        });
        it('{r: 255, g: 255, b: 256}:Object should return true', function () {
            expect(checking_1.isRgb({ r: 255, g: 255, b: 256 })).toBe(false);
        });
        it('{r: 255, g: 255, b: 255, a: 0}:Object should return true', function () {
            expect(checking_1.isRgb({ r: 255, g: 255, b: 256, a: 0 })).toBe(false);
        });
        it('{c: 255, m: 255, y: 256}:Object should return true', function () {
            expect(checking_1.isRgb({ c: 255, m: 255, y: 256 })).toBe(false);
        });
        it('[255,0,0]:Array should return false', function () {
            expect(checking_1.isRgb({ c: 255, m: 255, y: 256 })).toBe(false);
        });
    });
    describe('isObject', function () {
        it('string should return false', function () {
            expect(checking_1.isObjectString('test')).toBe(false);
        });
        it('array should return false', function () {
            expect(checking_1.isObjectString("['test']")).toBe(false);
        });
        it('empty object string should return true', function () {
            expect(checking_1.isObjectString('{}')).toBe(true);
        });
        it('empty array string should return true', function () {
            expect(checking_1.isObjectString('[]')).toBe(true);
        });
        it('object single quotes should return false', function () {
            expect(checking_1.isObjectString("{'test':'test'}")).toBe(false);
        });
        it('object double quotes should return true', function () {
            expect(checking_1.isObjectString('{"test":"test"}')).toBe(true);
        });
        it('object double quotes escaped should return true', function () {
            // prettier-ignore
            expect(checking_1.isObjectString("{\"test\":\"test\"}")).toBe(true);
        });
        it('actual object should return false', function () {
            expect(checking_1.isObjectString({ test: 'test' })).toBe(false);
        });
    });
});
//# sourceMappingURL=checking.test.js.map