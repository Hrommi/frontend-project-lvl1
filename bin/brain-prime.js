#!/usr/bin/env node

import initialize from '../src/initialize.js';
import startGame from '../src/index.js';
import primeGame from '../src/games/prime.js';

const { username } = initialize();
startGame(primeGame, username);
