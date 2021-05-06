import { startEvenGame } from '../src/games/even.js';

const evenNumbers = [0, 2, 14];
const oddNumbers = [1, 5, 13];

describe('startEvenGame', () => {
  test.each(evenNumbers)('should return correct question and answer for even number %s', (num) => {
    const options = {
      num,
    };
    const { question, expectedAnswer: answer } = startEvenGame(options);
    expect(question).toBe(num);
    expect(answer).toBe('yes');
  });

  test.each(oddNumbers)('should return correct question and answer for odd number %s', (num) => {
    const options = {
      num,
    };
    const { question, expectedAnswer: answer } = startEvenGame(options);
    expect(question).toBe(num);
    expect(answer).toBe('no');
  });
});
