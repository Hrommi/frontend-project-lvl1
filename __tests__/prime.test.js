import { startPrimeGame } from '../src/games/prime.js';

const primeNumbers = [2, 3, 13];
const compositeNumbers = [4, 9, 15];

describe('startPrimeGame', () => {
  test.each(primeNumbers)('should return correct question and answer for prime number %s', (num) => {
    const options = {
      num,
    };
    const { question, expectedAnswer: answer } = startPrimeGame(options);
    expect(question).toBe(num);
    expect(answer).toBe('yes');
  });

  test.each(compositeNumbers)('should return correct question and answer for composite number %s', (num) => {
    const options = {
      num,
    };
    const { question, expectedAnswer: answer } = startPrimeGame(options);
    expect(question).toBe(num);
    expect(answer).toBe('no');
  });
});
