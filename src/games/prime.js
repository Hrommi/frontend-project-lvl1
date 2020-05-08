import getRandomNum from '../utils/getRandomNum.js';
import isPrime from '../utils/isPrime.js';

const prime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const start = () => {
    const num = getRandomNum(1, 99);
    const expectedAnswer = isPrime(num) ? 'yes' : 'no';
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

export default prime;
