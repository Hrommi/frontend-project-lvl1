import getRandomNum from '../utils/getRandomNum.js';
import startGame from '../index.js';

const PROGRESSION_LENGTH = 10;

const getProgression = (initialTerm, difference) =>
  Array(PROGRESSION_LENGTH)
    .fill()
    .map((_, i) => initialTerm + difference * i);

const getQuestion = (progression, index) => {
  const head = progression.slice(0, index);
  const tail = progression.slice(index + 1);
  return [...head, '..', ...tail].join(' ');
};

const description = 'What number is missing in the progression?';

export const getProgressionOptions = () => ({
  initialTerm: getRandomNum(0, 10),
  difference: getRandomNum(1, 10),
  hiddenElementIndex: getRandomNum(0, PROGRESSION_LENGTH - 1),
});

export const startProgressionGame = ({ initialTerm, difference, hiddenElementIndex }) => {
  const progression = getProgression(initialTerm, difference);
  const expectedAnswer = String(progression[hiddenElementIndex]);
  return {
    question: getQuestion(progression, hiddenElementIndex),
    expectedAnswer,
  };
};

export default () => {
  startGame(description, startProgressionGame, getProgressionOptions);
};
