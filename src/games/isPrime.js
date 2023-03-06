const isPrime = (getNumberOne) => {
  for (let i = 2, max = Math.sqrt(getNumberOne); i <= max; i += 1) {
    if (getNumberOne % i === 0) {
      return false;
    }
  }
  return true;
};
export default isPrime;
