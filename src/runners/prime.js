import initialize from '../initialize.js';
import startGame from '../index.js';
import primeGame from '../games/prime.js';

const startPrimeGame = () => {
  const { username } = initialize();
  startGame(primeGame, username);
};

export default startPrimeGame;
