import { getRandIntValue, generateStack, getRandomChoice } from '../utils.js';

// -- Description
export const description = 'What number is missing in the progression?';

// -- Constants
const firstMin = 0;
const firstMax = 100;
const stepMin = 1;
const stepMax = 100;
const lengthMin = 5;
const lengthMax = 10;

const generateProgression = (start, step, length) => {
  let sequence = generateStack(0, length - 1);
  sequence = sequence.map((index) => start + index * step);
  return sequence;
};

export const generateRound = () => {
  const start = getRandIntValue(firstMin, firstMax);
  const step = getRandIntValue(stepMin, stepMax);
  const length = getRandIntValue(lengthMin, lengthMax);

  const progression = generateProgression(start, step, length);
  let rightAnswer = getRandomChoice(progression);

  progression[progression.indexOf(rightAnswer)] = '..';
  const question = progression.join(' ');
  rightAnswer = String(rightAnswer);

  return [question, rightAnswer];
};
