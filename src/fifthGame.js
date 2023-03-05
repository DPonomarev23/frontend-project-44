#!/usr/bin/env node
import getName from './cli.js';
import readlineSync from 'readline-sync';
import isPrime from './isPrime.js';

console.log('Welcome to the Brain Games!');
const name = getName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
const printAnswer = () => {
   let i = 1;
   while (i <= 3) {
      let getNumberOne = Math.ceil(Math.random() * 100);
      console.log(`Question: ${getNumberOne}`);
      const answer = readlineSync.question('Your answer: ');
      const result = isPrime(getNumberOne) ? 'yes' : 'no';
      if (result === answer) {
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