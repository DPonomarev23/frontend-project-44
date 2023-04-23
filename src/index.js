import readlineSync from 'readline-sync';

const run = (getTask, description) => {
  const greeting = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    return userName;
  };
  const name = greeting();
  console.log(description);
  for (let i = 1; i <= 3; i += 1) {
    const [question, correctAnswer] = getTask();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ; (. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default run;
