import getRandomNum from '../utils/getRandomNum.js';
import isEven from '../utils/isEven.js';
import prompt from '../cli.js';

const even = (username) => {
  const loseMessage = `Let's try again, ${username}`;
  const winMessage = `Congratulations, ${username}!`;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNum(0, 99);
    const expectedAnswer = isEven(num) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const answer = prompt('Your answer: ');

    if (expectedAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".`);
      console.log(loseMessage);
      return;
    }
  }

  console.log(winMessage);
};

export default even;
