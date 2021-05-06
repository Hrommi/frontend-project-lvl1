import getRandomNum from '../utils/getRandomNum.js';
import startGame from '../index.js';

const operatorsMapping = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const operators = Object.keys(operatorsMapping);

const description = 'What is the result of the expression?';

const getCalcOptions = () => {
  const operatorIndex = getRandomNum(0, operators.length - 1);
  return {
    operator: operators[operatorIndex],
    num1: getRandomNum(0, 10),
    num2: getRandomNum(0, 10),
  };
};

export const startCalcGame = ({ operator, num1, num2 }) => {
  const calculate = operatorsMapping[operator];
  const expectedAnswer = String(calculate(num1, num2));
  return {
    question: `${num1} ${operator} ${num2}`,
    expectedAnswer,
  };
};

export default () => {
  startGame(description, startCalcGame, getCalcOptions);
};
