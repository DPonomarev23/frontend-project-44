const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getRandomIndex = (data) => {
  const i = Math.floor(Math.random() * data.length);
  return i;
};

const isPrime = (number) => {
  for (let i = 2, max = Math.sqrt(number); i <= max; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getRandomNumber = (min, max) => {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
};
export {
  getRandomNumber, isPrime, getRandomIndex, isEven,
};
