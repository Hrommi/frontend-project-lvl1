import { startProgressionGame } from '../src/games/progression.js';

const numbers = [
  { initialTerm: 0, difference: 1, hiddenElementIndex: 0, progression: '.. 1 2 3 4 5 6 7 8 9', expected: '0' },
  { initialTerm: 0, difference: 2, hiddenElementIndex: 1, progression: '0 .. 4 6 8 10 12 14 16 18', expected: '2' },
  { initialTerm: 0, difference: 2, hiddenElementIndex: 5, progression: '0 2 4 6 8 .. 12 14 16 18', expected: '10' },
];

describe('startProgressionGame', () => {
  test.each(numbers)(
    'should return correct question and answer for %j',
    ({ initialTerm, difference, hiddenElementIndex, progression, expected }) => {
      const options = {
        initialTerm,
        difference,
        hiddenElementIndex,
      };
      const { question, expectedAnswer: answer } = startProgressionGame(options);
      expect(question).toBe(progression);
      expect(answer).toBe(expected);
    }
  );
});
