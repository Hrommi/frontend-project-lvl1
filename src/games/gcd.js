import getRandomNum from '../utils/getRandomNum.js';
import startGame from '../index.js';

const description = 'What is the result of the expression?';

const getGcd = (a, b) => (a % b ? getGcd(b, a % b) : Math.abs(b));

export const getGcdOptions = () => ({
  num1: getRandomNum(0, 10),
  num2: getRandomNum(0, 10),
});

export const startGcdGame = ({ num1, num2 }) => {
  const expectedAnswer = String(getGcd(num1, num2));
  return {
    question: `${num1} ${num2}`,
    expectedAnswer,
  };
};

export default () => {
  startGame(description, startGcdGame, getGcdOptions);
};
