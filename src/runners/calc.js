import initialize from '../initialize.js';
import startGame from '../index.js';
import getCalcGame from '../games/calc.js';

const startCalcGame = () => {
  const { username } = initialize();
  startGame(getCalcGame, username);
};

export default startCalcGame;
