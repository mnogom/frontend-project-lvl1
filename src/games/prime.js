import { getRandIntValue } from '../utils.js';
import buildGame from '../engine.js';

// -- Description
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// -- Constants
const minValue = 0;
const maxValue = 100;

/**
 * Check if number is prime.
 It uses Sieve of Eratosthenes conception.
 More: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 * @param {number} value
 * @return {boolean}
 */
const isPrime = (value) => {
  if (value === 0 || value === 1) {
    return false;
  }
  for (let divider = 2; divider <= Math.sqrt(value); divider += 1) {
    if (value % divider === 0) {
      return false;
    }
  }
  return true;
};

/**
 * Generate question and right answer.
 * @return {[string,string]}
 */
const generateRound = () => {
  const value = getRandIntValue(minValue, maxValue);
  const question = String(value);
  const rightAnswer = isPrime(value) ? 'yes' : 'no';
  return [question, rightAnswer];
};

/**
 * Run game with engine
 */
export default () => {
  buildGame({ description, generateRound });
};
