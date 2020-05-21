import initialize from '../initialize.js';
import startGame from '../index.js';
import calcGame from '../games/calc.js';

const startCalcGame = () => {
  const { username } = initialize();
  startGame(calcGame, username);
};

export default startCalcGame;
