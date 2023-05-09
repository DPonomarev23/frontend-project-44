#!/usr/bin/env node
import run from '../index.js';
import { getRandomIndex, getRandomNumber } from './utils.js';

const description = 'What number is missing in the progression?';

const createProgression = (firstNumber, step, len) => {
  const data = [];
  for (let i = 0; i < len; i += step) {
    data.push(firstNumber + i);
  }
  return data;
};

const getTask = () => {
  const start = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 5);
  const length = step * 10;
  const symbol = ['..'];
  const newArr = createProgression(start, step, length);
  const index = getRandomIndex(newArr);
  const correctAnswer = newArr[index];
  newArr[index] = symbol;
  const newData = newArr.join(' ');
  const question = `${newData}`;
  return [question, String(correctAnswer)];
};

const runProgression = () => {
  run(getTask, description);
};

export default runProgression;
