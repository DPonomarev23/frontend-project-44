#!/usr/bin/env node
import run from '../index.js';
import prime from './prime.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = () => {
  const numberOne = Math.ceil(Math.random() * 100);
  const question = `${numberOne}`;
  const correctAnswer = prime(numberOne) ? 'yes' : 'no';
  return [question, String(correctAnswer)];
};
export default () => run(isPrime, description);
