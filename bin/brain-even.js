#!/usr/bin/env node

import play from '../src/engine.js';

import('../src/games/even.js').then((game) => play(game));
