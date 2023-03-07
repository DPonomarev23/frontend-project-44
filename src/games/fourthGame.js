#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getName from './cli.js';

const name = getName();
console.log('What number is missing in the progression?');
const printAnswer = () => {
  let i = 1;
  while (i <= 3) {
    const getNumberOne = Math.round(Math.random() * 10);
    const getNumberTwo = Math.ceil(Math.random() * 100);
    const num = Math.round((getNumberTwo - getNumberOne) / 10);
    const arr = [];
    for (let index = 0; index < 10; index += 1) {
      arr.push(num * index);
    }
    const symbol = ['..'];
    const index = Math.floor(Math.random() * arr.length);
    const result = arr[index];
    arr[index] = symbol;
    const newArr = arr.join(' ');
    console.log(`Question: ${newArr}`);
    const answer = readlineSync.question('Your answer: ');
    if (result.toString() === answer) {
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
