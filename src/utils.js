/**
 * Get random value integer in range [min; max]
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export const getRandIntValue = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

/**
 * Get random element from sequence
 * @param {number[]|string[]} elements
 * @returns {number|string}
 */
export const getRandomChoice = (elements) => elements[getRandIntValue(0, elements.length - 1)];

/**
 * Get stack from min to max
 * @param {number} min
 * @param {number} max
 * @returns {number[]}
 */
export const getStack = (min, max) => {
  const stack = [];
  for (let i = min; i <= max; i += 1) {
    stack.push(i);
  }
  return stack;
};
