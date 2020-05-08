const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const sqrtnum = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= sqrtnum; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default isPrime;
