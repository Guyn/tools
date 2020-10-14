import { minMax, limitTo,isBetween,isTruthy,isFalsy } from './utils';
describe('Utils', () => {
  describe('minMax', () => {
    it('0 should return 0', () => {
      expect(minMax(0)).toBe(0);
    });
    it('255 should return 255', () => {
      expect(minMax(255)).toBe(255);
    });
    it('100 should return 100', () => {
      expect(minMax(100)).toBe(100);
    });
    it('-1 should return 0', () => {
      expect(minMax(-1)).toBe(0);
    });
    it('256 should return 255', () => {
      expect(minMax(256)).toBe(255);
    });
    it('-256 should return -256', () => {
      expect(minMax(-256, -1000)).toBe(-256);
    });
    it('256 should return -256', () => {
      expect(minMax(256, -1000, 100)).toBe(100);
    });
  });
  describe('limitTo', () => {
    it('String should be limited to 7 chars - untouched', () => {
      expect(limitTo('This is', 7)).toBe('This is');
    });
    it('String should be limited to 7 chars - remove chars', () => {
      expect(limitTo('This is a test', 7)).toBe('This is');
    });
    it('String should be limited to 7 chars - add spaces', () => {
      expect(limitTo('This', 7)).toBe('This   ');
    });
    it("String should be limited to 7 chars - add 0's", () => {
      expect(limitTo('#ae', 7, '0')).toBe('#ae0000');
    });
    it("String should be limited to 7 chars - add 0's (number)", () => {
      expect(limitTo('#ae', 7, 0)).toBe('#ae0000');
    });
  });


  describe('isBetween', () => {
    it('10, 0, 100 should return true', () => {
      expect(isBetween(10,0,100)).toBeTruthy;
    });  
    it('10, 20, 100 should return false', () => {
      expect(isBetween(10,20,100)).toBeFalsy;
    });  
    it('110, 0, 100 should return false', () => {
      expect(isBetween(10,0,100)).toBeFalsy;
    });  
    it('-10, 0, 100 should return false', () => {
      expect(isBetween(-10,0,100)).toBeFalsy;
    });
    it('-10, -20, 100 should return true', () => {
      expect(isBetween(-10,-20,100)).toBeTruthy;
    });
  });


  describe('isTruthy', () => {
    it('undefined should be false', () => {
      expect(isTruthy(undefined)).toBeFalsy;
    }); 
    it('0 should be false', () => {
      expect(isTruthy(0)).toBeFalsy;
    }); 
    it('-1 should be true', () => {
      expect(isTruthy(-1)).toBeTruthy;
    }); 
    it('"" should be false', () => {
      expect(isTruthy("")).toBeFalsy;
    }); 
    it('" " should be true', () => {
      expect(isTruthy(" ")).toBeTruthy;
    }); 
    it('true should be true', () => {
      expect(isTruthy(true)).toBeTruthy;
    }); 
    it('false should be true', () => {
      expect(isTruthy(false)).toBeFalsy;
    }); 
    it('"false" should be true', () => {
      expect(isTruthy("false")).toBeTruthy;
    }); 
  });
  describe('isFalsy', () => {
    it('undefined should be false', () => {
      expect(isFalsy(undefined)).toBeTruthy;
    }); 
    it('0 should be false', () => {
      expect(isFalsy(0)).toBeTruthy;
    }); 
    it('-1 should be true', () => {
      expect(isFalsy(-1)).toBeFalsy;
    }); 
    it('"" should be false', () => {
      expect(isFalsy("")).toBeTruthy;
    }); 
    it('" " should be true', () => {
      expect(isFalsy(" ")).toBeFalsy;
    }); 
    it('true should be true', () => {
      expect(isFalsy(true)).toBeFalsy;
    }); 
    it('false should be true', () => {
      expect(isFalsy(false)).toBeTruthy;
    }); 
    it('"false" should be true', () => {
      expect(isFalsy("false")).toBeFalsy;
    }); 
  });
});
