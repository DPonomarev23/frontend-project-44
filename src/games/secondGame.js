#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getName from './cli.js';

const name = getName();
console.log('What is the result of the expression?');
const printAnswer = () => {
  let i = 1;
  while (i <= 3) {
    const getNumberOne = Math.ceil(Math.random() * 100);
    const getNumberTwo = Math.ceil(Math.random() * 100);
    const symbols = ['+', '-', '*'];
    const index = Math.floor(Math.random() * symbols.length);
    const randomSymbols = symbols[index];
    console.log(`Question: ${getNumberOne} ${randomSymbols} ${getNumberTwo}`);
    const answer = readlineSync.question('Your answer: ');
    const answerNew = Number(answer);
    let result;
    switch (randomSymbols) {
      case '+':
        result = getNumberOne + getNumberTwo;
        break;
      case '-':
        result = getNumberOne - getNumberTwo;
        break;
      case '*':
        result = getNumberOne * getNumberTwo;
        break;
      default:
        return;
    }
    if (result === answerNew) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${answer} is wrong answer ; (. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
// printAnswer();
export default printAnswer;
