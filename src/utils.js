export const getRandIntValue = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

export const getRandomChoice = (elements) => elements[getRandIntValue(0, elements.length - 1)];

export const generateStack = (min, max) => {
  const stack = [];
  for (let i = min; i <= max; i += 1) {
    stack.push(i);
  }
  return stack;
};
