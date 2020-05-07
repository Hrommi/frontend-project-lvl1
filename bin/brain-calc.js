#!/usr/bin/env node

import initialize from '../src/initialize.js';
import startGame from '../src/index.js';
import calcGame from '../src/games/calc.js';

const { username } = initialize();
startGame(calcGame, username);
