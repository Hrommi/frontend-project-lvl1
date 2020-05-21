import initialize from '../initialize.js';
import startGame from '../index.js';
import evenGame from '../games/even.js';

const startEvenGame = () => {
  const { username } = initialize();
  startGame(evenGame, username);
};

export default startEvenGame;
