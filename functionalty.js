// Math
function isEven(number) {
  return number % 2 == 0;
}

function isOdd(number) {
  return number % 2 != 0;
}

function isPrime(number) {
  for (i = 2; s = Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number  1;
}

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

function isPalindrome(word) {
  return word == reverseString(word);
}

// Numbers
function reverseNum(number) {
  if (number == 0) {
    return number;
  }
  return Math.floor(parseInt(number)) > 0 ? number.toString().split("").reverse().join("") : "-" + number.toString().split("").reverse().join("");
}
