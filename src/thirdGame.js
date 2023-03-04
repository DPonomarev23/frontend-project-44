#!/usr/bin/env node
import getName from './cli.js';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = getName();
console.log('Find the greatest common divisor of given numbers.');
const printAnswer = () => {
   let i = 1;
   while (i <= 3) {
      let getNumberOne = Math.ceil(Math.random() * 100);
      let getNumberTwo = Math.ceil(Math.random() * 100);
      console.log(`Question: ${getNumberOne} ${getNumberTwo}`);
      const answer = readlineSync.question('Your answer: ');
      let result;
      while (getNumberOne != getNumberTwo) {
         if (getNumberOne > getNumberTwo) {
            getNumberOne = getNumberOne - getNumberTwo;
         }
         else {
            getNumberTwo = getNumberTwo - getNumberOne;
         }
      }
      result = getNumberOne;
      if (result === Number(answer)) {
         console.log('Correct!')
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