import prompt from './cli.js';

const ROUND_COUNT = 3;

const startGame = (game, username) => {
  const loseMessage = `Let's try again, ${username}`;
  const winMessage = `Congratulations, ${username}!`;
  const { rules, start } = game();

  console.log(rules);

  for (let i = 0; i < ROUND_COUNT; i += 1) {
    const { question, expectedAnswer } = start();
    console.log(`Question: ${question}`);
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

export default startGame;
