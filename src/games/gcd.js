#!/usr/bin/env node
import run from '../index.js';
import { getRandomNumber } from './utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getNod = (x, y) => {
  if (y > x) {
    return getNod(y, x);
  }
  if (!y) {
    return x;
  }
  return getNod(y, x % y);
};

const getTask = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = getNod(number1, number2);
  return [question, String(correctAnswer)];
};

const runGcd = () => {
  run(getTask, description);
};

export default runGcd;
