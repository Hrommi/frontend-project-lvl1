import getRandomNum from '../utils/getRandomNum.js';
import startGame from '../index.js';

const mapping = {
  0: {
    operator: '+',
    calculate: (a, b) => a + b,
  },
  1: {
    operator: '-',
    calculate: (a, b) => a - b,
  },
  2: {
    operator: '*',
    calculate: (a, b) => a * b,
  },
};

const getOperator = () => (
  mapping[getRandomNum(0, Object.keys(mapping).length - 1)]
);

const rules = 'What is the result of the expression?';

const startCalcGame = () => {
  const operator = getOperator();
  const num1 = getRandomNum(0, 10);
  const num2 = getRandomNum(0, 10);
  const expectedAnswer = String(operator.calculate(num1, num2));
  return {
    question: `${num1} ${operator.operator} ${num2}`,
    expectedAnswer,
  };
};

export default () => {
  startGame(rules, startCalcGame);
};
