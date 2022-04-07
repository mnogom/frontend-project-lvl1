import { getRandIntValue } from '../utils.js';

// -- Description
export const description = 'Find the greatest common divisor of given numbers.';

// -- Constants
const minValue = 0;
const maxValue = 100;

const getGCD = (value1, value2) => {
  const reminder = value1 % value2;
  if (reminder === 0) {
    return value2;
  }
  return getGCD(value2, reminder);
};

export const generateRound = () => {
  const value1 = getRandIntValue(minValue, maxValue);
  const value2 = getRandIntValue(minValue, maxValue);

  const question = `${value1} ${value2}`;
  const rightAnswer = String(getGCD(value1, value2));

  return [question, rightAnswer];
};
