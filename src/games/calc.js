import getRandomNum from '../utils/getRandomNum.js';
import startGame from '../index.js';

const operations = [
  {
    operator: '+',
    calculate: (a, b) => a + b,
  },
  {
    operator: '-',
    calculate: (a, b) => a - b,
  },
  {
    operator: '*',
    calculate: (a, b) => a * b,
  },
];

const description = 'What is the result of the expression?';

const startCalcGame = () => {
  const operationIndex = getRandomNum(0, operations.length - 1);
  const { operator, calculate } = operations[operationIndex];
  const num1 = getRandomNum(0, 10);
  const num2 = getRandomNum(0, 10);
  const expectedAnswer = String(calculate(num1, num2));
  return {
    question: `${num1} ${operator} ${num2}`,
    expectedAnswer,
  };
};

export default () => {
  startGame(description, startCalcGame);
};
