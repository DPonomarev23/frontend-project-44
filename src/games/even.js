#!/usr/bin/env node
import { isEven } from './utils.js';
import run from '../index.js';
import { getRandomNumber } from './utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getTask = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
};

const runEven = () => {
  run(getTask, description);
};

export default runEven;
