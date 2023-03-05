#!/usr/bin/env node
import getName from './cli.js';
import readlineSync from 'readline-sync';
import getEven from './getEven.js'

const name = getName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const printAnswer = () => {
   let i = 1;
   while (i <= 3) {
      let getNumber = Math.ceil(Math.random() * 100);
      console.log(`Question: ${getNumber}`);
      const answer = readlineSync.question('Answer: ');
      const result = getEven(getNumber);
      if (result === answer) {
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