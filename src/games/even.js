import { getRandIntValue } from '../utils.js';
import buildGame from '../engine.js';

// -- Description
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

// -- Constants
const minValue = 0;
const maxValue = 100;

/**
 * Check if value is even.
 * @param {number} value
 * @return {boolean}
 */
const isEven = (value) => value % 2 === 0;

/**
 * Generate question and right answer.
 * @return {[string,string]}
 */
const generateRound = () => {
  const value = getRandIntValue(minValue, maxValue);
  const question = String(value);
  const rightAnswer = isEven(value) ? 'yes' : 'no';

  return [question, rightAnswer];
};

/**
 * Run game with engine
 */
export default () => {
  buildGame({ description, generateRound });
};
