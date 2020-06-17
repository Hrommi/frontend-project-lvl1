import getRandomNum from '../utils/getRandomNum.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const startEvenGame = () => {
  const num = getRandomNum(0, 99);
  const expectedAnswer = isEven(num) ? 'yes' : 'no';
  return {
    question: num,
    expectedAnswer,
  };
};

export default () => {
  startGame(description, startEvenGame);
};
