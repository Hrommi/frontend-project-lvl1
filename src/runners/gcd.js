import initialize from '../initialize.js';
import startGame from '../index.js';
import gcdGame from '../games/gcd.js';

const startGcdGame = () => {
  const { username } = initialize();
  startGame(gcdGame, username);
};

export default startGcdGame;
