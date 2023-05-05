#!/usr/bin/env node
import run from '../index.js';
import { getRandomNumber } from './utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const calculate = (x, y) => {
  while (x !== y) {
    if (x > y) {
      x -= y;
    } else {
      y -= x;
    }
  }
  return x;
};

const getTask = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${number2}`;
  const correctAnswer = calculate(number1, number2);
  return [question, String(correctAnswer)];
};

const runGcd = () => {
  run(getTask, description);
};

export default runGcd;
