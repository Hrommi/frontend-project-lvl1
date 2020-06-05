import prompt from './cli.js';

const ROUND_COUNT = 3;

const startGame = (rules, startRound) => {
  console.log('Welcome to the Brain Games!');
  const username = prompt('May I have your name? ');
  console.log(`Hello, ${username}!`);

  console.log(rules);

  for (let i = 0; i < ROUND_COUNT; i += 1) {
    const { question, expectedAnswer } = startRound();
    console.log(`Question: ${question}`);
    const answer = prompt('Your answer: ');

    if (expectedAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".`);
      console.log(`Let's try again, ${username}`);
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};

export default startGame;
