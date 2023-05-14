#!/usr/bin/env node
import run from '../index.js';
import { isPrime, getRandomNumber } from './utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const getTask = () => {
  const number1 = getRandomNumber(1, 100);
  const question = `${number1}`;
  const correctAnswer = isPrime(number1) ? 'yes' : 'no';
  return [String(question), String(correctAnswer)];
};

const runPrime = () => {
  run(getTask, description);
};

export default runPrime;
