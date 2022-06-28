import { getRandIntValue } from '../utils.js';
import buildGame from '../engine.js';

// -- Description
const description = 'Find the greatest common divisor of given numbers.';

// -- Constants
const minValue = 0;
const maxValue = 100;

/**
 * Return greatest common divisor of two numbers.

 It uses Euclidean algorithm.
 More: https://en.wikipedia.org/wiki/Euclidean_algorithm
 * @param {number} value1
 * @param {number} value2
 * @return {number}
 */
const getGCD = (value1, value2) => {
  const reminder = value1 % value2;
  if (reminder === 0) {
    return value2;
  }
  return getGCD(value2, reminder);
};

/**
 * Generate question and right answer.
 * @return {[string,string]}
 */
const generateRound = () => {
  const value1 = getRandIntValue(minValue, maxValue);
  const value2 = getRandIntValue(minValue, maxValue);
  const question = `${value1} ${value2}`;
  const rightAnswer = String(getGCD(value1, value2));
  return [question, rightAnswer];
};

/**
 * Run game with engine
 */
export default () => {
  buildGame({ description, generateRound });
};
