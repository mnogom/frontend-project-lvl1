import readlineSync from 'readline-sync';

const countsOfRoundsToWin = 3;

const templateQuestion = 'Question: {task}';
const templateOnRightAnswer = 'Correct!';
const templateOnWrongAnswer = '\'{user_answer}\' is wrong answer ;(. Correct answer was \'{right_answer}\'. Let\'s try again, {username}!';
const templateOnWin = 'Congratulations, {username}!';

const templateWelcome = 'Welcome to the Brain Games!';
const templateGreeting = 'Hello, {username}!';
const templateGetName = 'May I have your name? ';
const templateGetAnswer = 'Your answer: ';

const format = (template, data) => {
  let result = template;
  for (const [key, value] of Object.entries(data)) {
    result = result.replace(`{${key}}`, value);
  }
  return result;
};

export default (game) => {
  console.log(templateWelcome);
  const username = readlineSync.question(templateGetName);
  console.log(format(templateGreeting, { username: username }));

  // -- Show to user Description
  console.log(game.description);

  // -- Main game mechanic
  for (let i = 0; i < countsOfRoundsToWin; i ++) {

    const [gameQuestion, rightAnswer] = game.generateRound();
    console.log(format(templateQuestion, { task: gameQuestion }));
    const userAnswer = readlineSync.question(templateGetAnswer);

    if (userAnswer !== rightAnswer) {
      console.log(format(templateOnWrongAnswer, {
        username: username,
        user_answer: userAnswer,
        right_answer: rightAnswer
      }));
      return;
    }

    console.log(templateOnRightAnswer)
  }

  console.log(format(templateOnWin, { username: username} ))
}
