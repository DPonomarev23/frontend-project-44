#!/usr/bin/env node
import printAnswer from '../index.js';

const rules = 'What number is missing in the progression?';
const progression = () => {
  const numberOne = Math.round(Math.random() * 10);
  const numberTwo = Math.ceil(Math.random() * 100);
  const num = Math.round((numberTwo - numberOne) / 10);
  const arr = [];
  for (let index = 0; index < 10; index += 1) {
    arr.push(num * index);
  }
  const symbol = ['..'];
  const index = Math.floor(Math.random() * arr.length);
  const correctAnswer = arr[index];
  arr[index] = symbol;
  const newArr = arr.join(' ');
  const question = `${newArr}`;
  return [question, String(correctAnswer)];
};

export default () => printAnswer(progression, rules);
