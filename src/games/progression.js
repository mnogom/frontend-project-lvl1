import { getRandIntValue, getRandomChoice } from '../utils.js';
import buildGame from '../engine.js';

// -- Description
const description = 'What number is missing in the progression?';

// -- Constants
const firstMin = 0;
const firstMax = 100;
const stepMin = 1;
const stepMax = 100;
const lengthMin = 5;
const lengthMax = 10;

/**
 * Returns an arithmetic progression.
 * @param {number} start
 * @param {number} step
 * @param {number} length
 * @return {number[]}
 */
// const generateProgression = (start, step, length) => {
//   const sequence = getStack(0, length - 1);
//   return sequence.map((index) => start + index * step);
// };

/**
 * Generate question and right answer.
 * @return {[string,string]}
 */
const generateRound = () => {
  const start = getRandIntValue(firstMin, firstMax);
  const step = getRandIntValue(stepMin, stepMax);
  const length = getRandIntValue(lengthMin, lengthMax);
  const progression = Array(length).fill().map((_, index) => start + index * step);

  let rightAnswer = getRandomChoice(progression);
  progression[progression.indexOf(rightAnswer)] = '..';
  const question = progression.join(' ');
  rightAnswer = String(rightAnswer);
  return [question, rightAnswer];
};

/**
 * Run game with engine
 */
export default () => {
  buildGame({ description, generateRound });
};
