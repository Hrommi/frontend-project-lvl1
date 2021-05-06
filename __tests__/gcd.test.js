import { startGcdGame } from '../src/games/gcd.js';

const numbers = [
  { pair: [0, 0], gcd: '0' },
  { pair: [0, 1], gcd: '1' },
  { pair: [6, 10], gcd: '2' },
  { pair: [7, 21], gcd: '7' },
];

describe('startGcdGame', () => {
  test.each(numbers)('should return correct question and answer for %j', ({ pair: [num1, num2], gcd }) => {
    const options = {
      num1,
      num2,
    };
    const { question, expectedAnswer: answer } = startGcdGame(options);
    expect(question).toBe(`${num1} ${num2}`);
    expect(answer).toBe(gcd);
  });
});
