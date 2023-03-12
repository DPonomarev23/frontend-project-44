#!/usr/bin/env node
import printAnswer from '../index.js';
import isPrime from './isPrime.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const prime = () => {
    const numberOne = Math.ceil(Math.random() * 100);
    const question =`${numberOne}`;
    const correctAnswer = isPrime(numberOne) ? 'yes' : 'no';
    return [question,String(correctAnswer)]
};
export default () => printAnswer(prime,rules);
