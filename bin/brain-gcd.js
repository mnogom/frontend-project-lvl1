#!/usr/bin/env node

import play from '../src/engine.js';

import('../src/games/gcd.js').then((game) => play(game));
