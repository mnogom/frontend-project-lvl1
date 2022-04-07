import { getRandIntValue, generateStack } from '../utils.js';

// -- Description
export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// -- Constants
const minValue = 0;
const maxValue = 100;

const isPrime = (value) => {
  if (value === 0 || value === 1) {
    return false;
  }

  let allValues = generateStack(2, value).reverse();

  while (allValues.length !== 1) {
    const simpleValue = allValues.pop();
    allValues = allValues.filter((currentValue) => currentValue % simpleValue !== 0);

    if (!(allValues.includes(value))) {
      return false;
    }
  }

  return true;
};

export const generateRound = () => {
  const value = getRandIntValue(minValue, maxValue);

  const question = String(value);
  const rightAnswer = isPrime(value) ? 'yes' : 'no';

  return [question, rightAnswer];
};
