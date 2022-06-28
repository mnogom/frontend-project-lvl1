import readlineSync from 'readline-sync';
import fs from 'fs';

const countsOfRoundsToWin = 3;
const rawData = fs.readFileSync('./src/text_templates.json');
const texts = JSON.parse(rawData);

/**
 * Format template with data
 * @param {string} template
 * @param {Object} data
 * @returns {String}
 */
const formatString = (template, data) => {
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
  console.log(texts.templateWelcome);
  const username = readlineSync.question(texts.templateGetName);
  console.log(formatString(texts.templateGreeting, { username }));

  // -- Show to user Description
  console.log(game.description);

  // -- Main game mechanic
  for (let i = 0; i < countsOfRoundsToWin; i += 1) {
    const [gameQuestion, rightAnswer] = game.generateRound();
    console.log(formatString(texts.templateQuestion, { gameQuestion }));
    const userAnswer = readlineSync.question(texts.templateGetAnswer);

    if (userAnswer !== rightAnswer) {
      console.log(formatString(texts.templateOnWrongAnswer, { username, userAnswer, rightAnswer }));
      return;
    }

    console.log(texts.templateOnRightAnswer);
  }

  console.log(formatString(texts.templateOnWin, { username }));
};
