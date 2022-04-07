#!/usr/bin/env node

import play from '../src/engine.js';

import('../src/games/prime.js').then((game) => play(game));
