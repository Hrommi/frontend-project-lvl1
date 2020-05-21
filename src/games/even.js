import getRandomNum from '../utils/getRandomNum.js';
import isEven from '../utils/isEven.js';

const getEvenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const start = () => {
    const num = getRandomNum(0, 99);
    const expectedAnswer = isEven(num) ? 'yes' : 'no';
    return {
      question: num,
      expectedAnswer,
    };
  };

  return {
    rules,
    start,
  };
};

export default getEvenGame;
