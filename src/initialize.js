import prompt from './cli.js';
import greeting from './greeting.js';

const initialize = () => {
  console.log('Welcome to the Brain Games!');
  const username = prompt('May I have your name? ');
  greeting(username);
  return {
    username,
  };
};

export default initialize;
