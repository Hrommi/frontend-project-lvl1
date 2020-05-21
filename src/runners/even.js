import initialize from '../initialize.js';
import startGame from '../index.js';
import getEvenGame from '../games/even.js';

const startEvenGame = () => {
  const { username } = initialize();
  startGame(getEvenGame, username);
};

export default startEvenGame;
