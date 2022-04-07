import { getRandIntValue, getRandomChoice } from '../utils.js';

// -- Description
export const description = 'What is the result of the expression?';

// -- Constants
const minValue = 0;
const maxValue = 100;
const operations = '-+*';

const calculateResult = (value1, value2, operation) => {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    default:
      return undefined;
  }
};

export const generateRound = () => {
  const value1 = getRandIntValue(minValue, maxValue);
  const value2 = getRandIntValue(minValue, maxValue);
  const operation = getRandomChoice(operations);

  const question = `${value1} ${operation} ${value2}`;
  const rightAnswer = String(calculateResult(value1, value2, operation));

  return [question, rightAnswer];
};
