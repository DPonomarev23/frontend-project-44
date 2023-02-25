import readlineSync from 'readline-sync';

let getName = () => {

let userName = readlineSync.question('May I have your name? ');

console.log('Hello, ' + userName + '!');
}
export default getName;