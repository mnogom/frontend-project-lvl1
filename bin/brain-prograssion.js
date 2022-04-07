#!/usr/bin/env node

import play from '../src/engine.js';

import('../src/games/progression.js').then((game) => play(game));
