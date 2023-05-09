#!/usr/bin/env node
import { isEven, getRandomNumber } from './utils.js';
import run from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getTask = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
};

const runEven = () => {
  run(getTask, description);
};

export default runEven;
