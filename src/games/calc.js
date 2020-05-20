import getRandomNum from '../utils/getRandomNum.js';

const mapping = {
  0: {
    operator: '+',
    result: (a, b) => a + b,
  },
  1: {
    operator: '-',
    result: (a, b) => a - b,
  },
  2: {
    operator: '*',
    result: (a, b) => a * b,
  },
};

const getOperator = () => (
  mapping[getRandomNum(0, Object.keys(mapping).length - 1)]
);

const calc = () => {
  const rules = 'What is the result of the expression?';
  const start = () => {
    const operator = getOperator();
    const num1 = getRandomNum(0, 10);
    const num2 = getRandomNum(0, 10);
    const expectedAnswer = String(operator.result(num1, num2));
    return {
      question: `${num1} ${operator.operator} ${num2}`,
      expectedAnswer,
    };
  };

  return {
    rules,
    start,
  };
};

export default calc;
