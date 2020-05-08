#!/usr/bin/env node

import initialize from '../src/initialize.js';
import startGame from '../src/index.js';
import progressionGame from '../src/games/progression.js';

const { username } = initialize();
startGame(progressionGame, username);
