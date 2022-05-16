// Math
function getMid(number1, number2) {
  return Math.floor((number1 + number2) / 2)
}

// Arrays
function filterArray(array, value) {
  return array.filter(e => e != value);
}

function sumOfArray(array) {
  return array.reduce((a, b) => a + b, 0);
}

function ascending(array) {
  
}

function descending(array) {
  
}

function minArray(array) {
  let min = null;
  for (let i = 0; i < array.length; i++) {
    min == null ? min = array[i] : "";
    array[i] < min ? min = array[i] : "";
  }
  return min;
}

function maxArray(array) {
  let max = null;
  for (let i = 0; i < array.length; i++) {
    max == null ? max = array[i] : "";
    array[i] > max ? max = array[i] : "";
  }
  return max;
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
