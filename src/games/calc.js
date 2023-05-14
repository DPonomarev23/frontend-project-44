#!/usr/bin/env node
import run from '../index.js';
import { getRandomIndex, getRandomNumber } from './utils.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown error: '${operator}'!`);
  }
};

const getTask = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const index = getRandomIndex(operators);
  const operator = operators[index];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator);
  return [String(question), String(correctAnswer)];
};

const runCalc = () => {
  run(getTask, description);
};

export default runCalc;
