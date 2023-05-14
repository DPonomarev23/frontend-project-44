#!/usr/bin/env node
import run from '../index.js';
import { getRandomNumber } from './utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => {
  if (y > x) {
    return getGcd(y, x);
  }
  if (y === 0) {
    return x;
  }
  return getGcd(y, x % y);
};

const getTask = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2);
  return [String(question), String(correctAnswer)];
};

const runGcd = () => {
  run(getTask, description);
};

export default runGcd;
