import getRandomNum from '../utils/getRandomNum.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const sqrtnum = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= sqrtnum; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const getPrimeOptions = () => ({
  num: getRandomNum(0, 99),
});

export const startPrimeGame = ({ num }) => {
  const expectedAnswer = isPrime(num) ? 'yes' : 'no';
  return {
    question: num,
    expectedAnswer,
  };
};

export default () => {
  startGame(description, startPrimeGame, getPrimeOptions);
};
