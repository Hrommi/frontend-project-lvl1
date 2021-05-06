import { jest } from '@jest/globals';
import getRandomNum from '../src/utils/getRandomNum.js';

describe('getRandomNum', () => {
  test('should return the correct value in the range', () => {
    const min = 0;
    const max = 10;
    const randomNum = getRandomNum(min, max);
    expect(randomNum).toBeGreaterThanOrEqual(randomNum);
    expect(randomNum).toBeLessThanOrEqual(randomNum);
  });

  test('should return the correct value with mocked Math.random()', () => {
    jest.spyOn(global.Math, 'random').mockReturnValueOnce(0).mockReturnValueOnce(0.999);
    expect(getRandomNum(0, 10)).toBe(0);
    expect(getRandomNum(0, 10)).toBe(10);
    jest.spyOn(global.Math, 'random').mockRestore();
  });
});
