#!/usr/bin/env node

import initialize from '../src/initialize.js';
import startGame from '../src/index.js';
import gcdGame from '../src/games/gcd.js';

const { username } = initialize();
startGame(gcdGame, username);
