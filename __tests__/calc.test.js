import { startCalcGame } from '../src/games/calc.js';

describe('startCalcGame', () => {
  test('should return correct question and answer for adding', () => {
    const options = {
      operator: '+',
      num1: 1,
      num2: 2,
    };
    const { question, expectedAnswer: answer } = startCalcGame(options);
    expect(question).toBe('1 + 2');
    expect(answer).toBe('3');
  });

  test('should return correct question and answer for subract', () => {
    const options = {
      operator: '-',
      num1: 1,
      num2: 2,
    };
    const { question, expectedAnswer: answer } = startCalcGame(options);
    expect(question).toBe('1 - 2');
    expect(answer).toBe('-1');
  });

  test('should return correct question and answer for multiply', () => {
    const options = {
      operator: '*',
      num1: 2,
      num2: 3,
    };
    const { question, expectedAnswer: answer } = startCalcGame(options);
    expect(question).toBe('2 * 3');
    expect(answer).toBe('6');
  });
});
