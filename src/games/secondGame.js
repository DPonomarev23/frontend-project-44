#!/usr/bin/env node
import getName from './cli.js';
import readlineSync from 'readline-sync';

const name = getName();
console.log('What is the result of the expression?');
const printAnswer = () => {
   let i = 1;
   while (i <= 3) {
      let getNumberOne = Math.ceil(Math.random() * 100);
      let getNumberTwo = Math.ceil(Math.random() * 100);
      let symbols = ['+', '-', '*'];
      let index = Math.floor(Math.random() * symbols.length);
      let randomSymbols = symbols[index];
      console.log(`Question: ${getNumberOne}${randomSymbols}${getNumberTwo}`);
      const answer = readlineSync.question('Your answer: ');
      let answerNew = Number(answer);
      let result;
      switch (randomSymbols) {
         case '+':
            result = getNumberOne + getNumberTwo
            break;
         case '-':
            result = getNumberOne - getNumberTwo
            break;
         case '*':
            result = getNumberOne * getNumberTwo;
            break;
         default:
            return;
      };
      if (result === answerNew) {
         console.log("Correct!")
         i = i + 1;
      } else {
         console.log(`${answer} is wrong answer ; (. Correct answer was ${result}.`)
         console.log(`Let's try again, ${name}!`)
         return
      }
   }
   console.log(`Congratulations, ${name}!`)
   return
}
// printAnswer();
export default printAnswer;