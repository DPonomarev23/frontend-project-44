import readlineSync from 'readline-sync';

const run = (getTask, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  const roundsCount = 3;
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = getTask();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ; (. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default run;
