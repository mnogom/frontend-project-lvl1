import readlineSync from 'readline-sync';

const countsOfRoundsToWin = 3;

const templateQuestion = 'Question: {gameQuestion}';
const templateOnRightAnswer = 'Correct!';
const templateOnWrongAnswer = '\'{userAnswer}\' is wrong answer ;(. Correct answer was \'{rightAnswer}\'. Let\'s try again, {username}!';
const templateOnWin = 'Congratulations, {username}!';

const templateWelcome = 'Welcome to the Brain Games!';
const templateGreeting = 'Hello, {username}!';
const templateGetName = 'May I have your name? ';
const templateGetAnswer = 'Your answer: ';

/**
 * Format template with data
 * @param {string} template
 * @param {Object} data
 * @returns {String}
 */
export const formatString = (template, data) => {
  let result = template;
  // eslint-disable-next-line
  for (const [key, value] of Object.entries(data)) {
    result = result.replace(`{${key}}`, value);
  }
  return result;
};

/**
 * Main function to start the game.
 At the start game welcomes User and ask his name.
 Then engine shows to him description of current game and first question.
 For win User must give right answers for 3 questions.
 If any answer is wrong - User lost.

 * @param {Object} game module with game rules.
 * @param {string} game.description description of game
 * @param {function} game.generateRound generate right question and right answer
 */
export default (game) => {
  // -- Greeting user
  console.log(templateWelcome);
  const username = readlineSync.question(templateGetName);
  console.log(formatString(templateGreeting, { username }));

  // -- Show to user Description
  console.log(game.description);

  // -- Main game mechanic
  for (let i = 0; i < countsOfRoundsToWin; i += 1) {
    const [gameQuestion, rightAnswer] = game.generateRound();
    console.log(formatString(templateQuestion, { gameQuestion }));
    const userAnswer = readlineSync.question(templateGetAnswer);

    if (userAnswer !== rightAnswer) {
      console.log(formatString(templateOnWrongAnswer, { username, userAnswer, rightAnswer }));
      return;
    }

    console.log(templateOnRightAnswer);
  }

  console.log(formatString(templateOnWin, { username }));
};
