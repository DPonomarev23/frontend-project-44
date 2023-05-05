#!/usr/bin/env node
import run from '../index.js';
import { getRandomIndex, getRandomNumber } from './utils.js';

const description = 'What number is missing in the progression?';

const calculate = (firstNum,step,len) => {
  const data = [];
  for (let i = firstNum; i < len; i += step) {
    data.push(i);
  }
  return data;
};

const getTask = () => {
  const firstNumber = Math.round(getRandomNumber() / 10);
  const step = Math.round(getRandomNumber() / 10);
  const length = step * 10;
  const symbol = ['..'];
  const newArr = calculate(firstNumber,step,length);
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
