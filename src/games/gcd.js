import getRandomNum from '../utils/getRandomNum.js';
import getGcd from '../utils/getGcd.js';
import startGame from '../index.js';

const getGcdGame = () => {
  const rules = 'What is the result of the expression?';
  const start = () => {
    const num1 = getRandomNum(0, 10);
    const num2 = getRandomNum(0, 10);
    const expectedAnswer = String(getGcd(num1, num2));
    return {
      question: `${num1} ${num2}`,
      expectedAnswer,
    };
  };

  return {
    rules,
    start,
  };
};

export default () => {
  startGame(getGcdGame);
};
