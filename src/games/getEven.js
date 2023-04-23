#!/usr/bin/env node
import even from './even.js';
import run from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const getEven = () => {
  const question = Math.ceil(Math.random() * 100);
  const correctAnswer = even(question);
  return [question, correctAnswer];
};

export default () => run(getEven, description);
