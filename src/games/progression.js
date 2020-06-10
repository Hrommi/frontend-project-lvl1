import getRandomNum from '../utils/getRandomNum.js';
import startGame from '../index.js';

const PROGRESSION_LENGTH = 10;

const getProgression = (initialTerm, difference) => (
  Array(PROGRESSION_LENGTH)
    .fill()
    .map((_, i) => (
      initialTerm + difference * i
    ))
);

const getQuestion = (progression, index) => {
  const head = progression.slice(0, index);
  const tail = progression.slice(index + 1);
  return [...head, '..', ...tail].join(' ');
};

const rules = 'What number is missing in the progression?';

const startProgressionGame = () => {
  const initialTerm = getRandomNum(0, 10);
  const difference = getRandomNum(1, 10);
  const progression = getProgression(initialTerm, difference);
  const hiddenElementIndex = getRandomNum(0, progression.length - 1);
  const expectedAnswer = String(progression[hiddenElementIndex]);
  return {
    question: getQuestion(progression, hiddenElementIndex),
    expectedAnswer,
  };
};

export default () => {
  startGame(rules, startProgressionGame);
};
