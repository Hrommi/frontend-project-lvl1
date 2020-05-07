import getRandomNum from '../utils/getRandomNum.js';

const mapping = {
  0: {
    opetator: '+',
    result: (a, b) => a + b,
  },
  1: {
    opetator: '-',
    result: (a, b) => a - b,
  },
  2: {
    opetator: '*',
    result: (a, b) => a * b,
  },
};

const calc = () => {
  const rules = 'What is the result of the expression?';
  const start = () => {
    const operaton = mapping[getRandomNum(0, 2)];
    const num1 = getRandomNum(0, 10);
    const num2 = getRandomNum(0, 10);
    const expectedAnswer = String(operaton.result(num1, num2));
    return {
      question: `${num1} ${operaton.opetator} ${num2}`,
      expectedAnswer,
    };
  };

  return {
    rules,
    start,
  };
};

export default calc;
