#!/usr/bin/env node
import printAnswer from '../index.js';

const rules = 'What is the result of the expression?';
const calc = () => {
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
        return;
    }
    return [question,String(correctAnswer)]
};

export default () => printAnswer(calc, rules);
