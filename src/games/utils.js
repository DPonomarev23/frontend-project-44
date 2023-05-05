const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
export { isEven };

const getRandomIndex = (data) => {
  const i = Math.floor(Math.random() * data.length);
  return i;
};
export { getRandomIndex };

const isPrime = (number) => {
  for (let i = 2, max = Math.sqrt(number); i <= max; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
export { isPrime };

const getRandomNumber = () => {
  const min = Math.round(Math.random() * 10);
  const max = Math.ceil(Math.random() * 100);
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
};
export { getRandomNumber };
