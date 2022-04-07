#!/usr/bin/env node

import play from '../src/engine.js';

import('../src/games/calc.js').then((game) => play(game));
