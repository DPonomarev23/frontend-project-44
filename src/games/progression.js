#!/usr/bin/env node
import run from '../index.js';
import { getRandomIndex, getRandomNumber } from './utils.js';

const description = 'What number is missing in the progression?';

const createProgression = (start, step, len) => {
  const data = [];
  for (let i = 0; i < len; i += step) {
    data.push(start + i);
  }
  return data;
};

const getTask = () => {
  const start = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 5);
  const length = step * 10;
  const symbol = '..';
  const progression = createProgression(start, step, length);
  const index = getRandomIndex(progression);
  const correctAnswer = progression[index];
  progression[index] = symbol;
  const question = `${progression.join(' ')}`;
  return [question, String(correctAnswer)];
};

const runProgression = () => {
  run(getTask, description);
};

export default runProgression;
