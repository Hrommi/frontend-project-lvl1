import getRandomNum from '../utils/getRandomNum.js';

const PROGRESSION_LENGTH = 10;

const getProgression = (initialTerm, difference) => (
  [...Array(PROGRESSION_LENGTH)].map((_, i) => (
    initialTerm + difference * i
  ))
);

const getQuestion = (progression, index) => {
  const head = progression.slice(0, index);
  const tail = progression.slice(index + 1);
  return [...head, '..', ...tail].join(' ');
};

const getProgressionGame = () => {
  const rules = 'What number is missing in the progression?';
  const start = () => {
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

  return {
    rules,
    start,
  };
};

export default getProgressionGame;
