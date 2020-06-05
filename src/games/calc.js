import getRandomNum from '../utils/getRandomNum.js';
import startGame from '../index.js';

const operators = [
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

const rules = 'What is the result of the expression?';

const startCalcGame = () => {
  const operatorIndex = getRandomNum(0, operators.length - 1);
  const { operator, calculate } = operators[operatorIndex];
  const num1 = getRandomNum(0, 10);
  const num2 = getRandomNum(0, 10);
  const expectedAnswer = String(calculate(num1, num2));
  return {
    question: `${num1} ${operator} ${num2}`,
    expectedAnswer,
  };
};

export default () => {
  startGame(rules, startCalcGame);
};
