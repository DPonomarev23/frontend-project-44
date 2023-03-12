#!/usr/bin/env node
import getEven from './getEven.js';
import printAnswer from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const even = () => {
  const question = Math.ceil(Math.random() * 100);
  const correctAnswer = getEven(question);
  return [question, correctAnswer];
};

export default () => printAnswer(even, rules);
