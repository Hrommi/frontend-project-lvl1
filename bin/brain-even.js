#!/usr/bin/env node

import prompt from '../src/cli.js';
import greeting from '../src/greeting.js';
import startGame from '../src/index.js';
import evenGame from '../src/games/even.js';

console.log('Welcome to the Brain Games!');
const username = prompt('May I have your name? ');
greeting(username);
startGame(evenGame, username);
