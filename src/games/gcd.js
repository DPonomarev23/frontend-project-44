#!/usr/bin/env node
import run from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const getRound = () => {
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

export default () => run(getRound, description);
