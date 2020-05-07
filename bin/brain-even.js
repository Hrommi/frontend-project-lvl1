#!/usr/bin/env node

import initialize from '../src/initialize.js';
import startGame from '../src/index.js';
import evenGame from '../src/games/even.js';

const { username } = initialize();
startGame(evenGame, username);
