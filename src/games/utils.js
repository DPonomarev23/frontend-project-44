const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const getRandomIndex = (data) => Math.floor(Math.random() * data.length);

const isPrime = (number) => {
  for (let i = 2, max = Math.sqrt(number); i <= max; i += 1) {
    if (number % i < 1) {
      return false;
    }
  }
  return true;
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export {
  getRandomNumber, isPrime, getRandomIndex, isEven,
};
