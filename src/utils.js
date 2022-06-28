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
