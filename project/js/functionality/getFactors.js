function getFactors(number) {
  if (typeof number !== 'number') {
    throw new TypeError('Expected a number but got ' + typeof number);
  }
  return [...Array(number + 1).keys()].filter((i) => number % i === 0);
}
module.exports = getFactors;