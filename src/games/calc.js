#!/usr/bin/env node
import run from '../index.js';

const description = 'What is the result of the expression?';
const runCalc = () => {
  const numberOne = Math.ceil(Math.random() * 100);
  const numberTwo = Math.ceil(Math.random() * 100);
  const symbols = ['+', '-', '*'];
  const index = Math.floor(Math.random() * symbols.length);
  const randomSymbols = symbols[index];
  const question = `${numberOne} ${randomSymbols} ${numberTwo}`;
  let correctAnswer;
  switch (randomSymbols) {
    case '+':
      correctAnswer = numberOne + numberTwo;
      break;
    case '-':
      correctAnswer = numberOne - numberTwo;
      break;
    case '*':
      correctAnswer = numberOne * numberTwo;
      break;
    default:
      break;
  }
  return [question, String(correctAnswer)];
};

export default () => run(runCalc, description);
