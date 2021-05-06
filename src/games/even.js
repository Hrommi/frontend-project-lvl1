import getRandomNum from '../utils/getRandomNum.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getEvenOptions = () => ({
  num: getRandomNum(0, 99),
});

export const startEvenGame = ({ num }) => {
  const expectedAnswer = isEven(num) ? 'yes' : 'no';
  return {
    question: num,
    expectedAnswer,
  };
};

export default () => {
  startGame(description, startEvenGame, getEvenOptions);
};
