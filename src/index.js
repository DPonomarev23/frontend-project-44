import getName from './games/cli.js';
import readlineSync from 'readline-sync';

const printAnswer = (game,rules) => {
   const name = getName();
   console.log(rules)
  let i = 1;
  while (i <= 3) {
   const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ; (. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default printAnswer;