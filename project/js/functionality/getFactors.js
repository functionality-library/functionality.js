function getFactors(number) {
  return [...Array(number + 1).keys()].filter((i) => number % i === 0);
}
module.exports = getFactors;