import getRandomNum from '../utils/getRandomNum.js';
import isPrime from '../utils/isPrime.js';
import startGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startPrimeGame = () => {
  const num = getRandomNum(1, 99);
  const expectedAnswer = isPrime(num) ? 'yes' : 'no';
  return {
    question: num,
    expectedAnswer,
  };
};

export default () => {
  startGame(rules, startPrimeGame);
};
