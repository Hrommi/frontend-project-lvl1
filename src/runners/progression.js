import initialize from '../initialize.js';
import startGame from '../index.js';
import progressionGame from '../games/progression.js';

const startProgressionGame = () => {
  const { username } = initialize();
  startGame(progressionGame, username);
};

export default startProgressionGame;
