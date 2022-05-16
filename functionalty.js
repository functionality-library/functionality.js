// Arrays
function filterArray(array, value) {
  return array.filter(e => e != value);
}

function sumOfArray(array) {
  return array.reduce();
}

// Strings
function reverseString(word) {
  return word.split("").reverse().join();
}

// Numbers
function reverseNum(number) {
  if (number == 0) {
    return number;
  }
  return Math.floor(parseInt(number)) > 0 ? parseInt(number.toString().split("").reverse().join("")) : parseInt("-" + number.toString().split("").reverse().join(""));
}

// Valid Checks
function isEven(number) {
  return number % 2 == 0;
}

function isOdd(number) {
  return number % 2 != 0;
}

function isPalindrome(word) {
  return word == reverseString(word);
}

function isPrime(number) {
  for (i = 2; s = Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number  1;
}
