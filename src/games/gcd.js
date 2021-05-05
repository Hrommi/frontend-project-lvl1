import getRandomNum from '../utils/getRandomNum.js';
import startGame from '../index.js';

const description = 'What is the result of the expression?';

const getGcd = (a, b) => (a % b ? getGcd(b, a % b) : Math.abs(b));

const startGcdGame = () => {
  const num1 = getRandomNum(0, 10);
  const num2 = getRandomNum(0, 10);
  const expectedAnswer = String(getGcd(num1, num2));
  return {
    question: `${num1} ${num2}`,
    expectedAnswer,
  };
};

export default () => {
  startGame(description, startGcdGame);
};
