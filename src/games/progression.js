import getRandomNum from '../utils/getRandomNum.js';

const PROGRESSION_LENGTH = 10;

const getProgression = (initialTerm, difference) => (
  [...Array(PROGRESSION_LENGTH)].map((_, i) => (
    initialTerm + difference * i
  ))
);

const prepareProgression = (progression, index) => {
  const head = progression.slice(0, index);
  const tail = progression.slice(index + 1);
  return [...head, '..', ...tail];
};

const progression = () => {
  const rules = 'What number is missing in the progression?';
  const start = () => {
    const initialTerm = getRandomNum(0, 10);
    const difference = getRandomNum(1, 10);
    const initialProgression = getProgression(initialTerm, difference);
    const index = getRandomNum(0, initialProgression.length - 1);
    const preparedProgression = prepareProgression(initialProgression, index);
    const expectedAnswer = String(initialProgression[index]);
    return {
      question: preparedProgression.join(' '),
      expectedAnswer,
    };
  };

  return {
    rules,
    start,
  };
};

export default progression;
