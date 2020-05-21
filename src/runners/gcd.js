import initialize from '../initialize.js';
import startGame from '../index.js';
import getGcdGame from '../games/gcd.js';

const startGcdGame = () => {
  const { username } = initialize();
  startGame(getGcdGame, username);
};

export default startGcdGame;
