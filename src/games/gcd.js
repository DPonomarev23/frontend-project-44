#!/usr/bin/env node
import printAnswer from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const gcd = () => {
  let numberOne = Math.ceil(Math.random() * 100);
  let numberTwo = Math.ceil(Math.random() * 100);
  const question = `${numberOne} ${numberTwo}`;
  while (numberOne !== numberTwo) {
    if (numberOne > numberTwo) {
      numberOne -= numberTwo;
    } else {
      numberTwo -= numberOne;
    }
  }
  const correctAnswer = numberOne;
  return [question, String(correctAnswer)];
};

export default () => printAnswer(gcd, rules);
