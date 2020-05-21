import initialize from '../initialize.js';
import startGame from '../index.js';
import getPrimeGame from '../games/prime.js';

const startPrimeGame = () => {
  const { username } = initialize();
  startGame(getPrimeGame, username);
};

export default startPrimeGame;
