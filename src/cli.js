import readlineSync from 'readline-sync';

/**
 * Welcome User and ask him for the name.
 */
export default () => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);
};
