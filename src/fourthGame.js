#!/usr/bin/env node
import getName from './cli.js';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = getName();
console.log('What number is missing in the progression?');
const printAnswer = () => {
   let i = 1;
   while (i <= 3) {
      let getNumberOne = Math.round(Math.random() * 10);
      let getNumberTwo = Math.ceil(Math.random() * 100);
      const arr = [];
      for (let i = 0; i < getNumberTwo; i += getNumberOne) {
         arr.push(getNumberOne + i);
      }
      const symbol = ['..'];
      let index = Math.floor(Math.random() * arr.length);
      let result = arr[index];
      arr[index] = symbol
      let newArr = arr.join();
      console.log(`Question: ${newArr}`);
      const answer = readlineSync.question('Your answer: ');
      if (result.toString() === answer) {
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