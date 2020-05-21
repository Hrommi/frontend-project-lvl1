import initialize from '../initialize.js';
import startGame from '../index.js';
import getProgressionGame from '../games/progression.js';

const startProgressionGame = () => {
  const { username } = initialize();
  startGame(getProgressionGame, username);
};

export default startProgressionGame;
