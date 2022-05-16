// Math
function sum(x,y) {
  return x + y;
}

function isEven(x) {
  return x % 2 == 0;
}

function isOdd(x) {
  return x % 2 != 0;
}

// Arrays
// Strings
function reverseString(word) {
  return word.split("").reverse().join();
}

function isPalindrome(word) {
  return word == reverseString(word);
}

// Numbers
