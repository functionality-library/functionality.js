try {
  // Math
  /**
   * get average between two numbers
   *
   * @param {number} number1
   * @param {number} number2
   * @returns {number}
   */
  function getMid(number1, number2) {
    return Math.floor((parseFloat(number1) + parseFloat(number2)) / 2);
  }

  function getFactors(number) {
    return [...Array(number + 1).keys()].filter((i) => number % i === 0);
  }

  // Randoms

  /**
   * Get a random number
   *
   * @param {number} start
   * @param {number} end
   * @returns {number}
   */
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function randomBoolean() {
    return Math.random() >= 0.5;
  }

  /**
   * Get a random element from an array
   *
   * @param {any[]} array
   * @returns
   */
  function randomElementFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function randomHex() {
    return `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, "0")}`;
  }

  // Arrays

  /**
   * Filter an array depending on the given value
   *
   * @param {any[]} array
   * @param {any} value
   * @returns
   */
  function filterArray(array, value) {
    return array.filter((e) => e != value);
  }

  /**
   * Get sum of all numbers in array
   *
   * @param {number[]} array array of numbers
   * @returns {number} sum of all numbers in array
   */
  function sumOfArray(array) {
    return array.reduce((a, b) => a + b, 0);
  }

  /**
   * Sort an array of numbers in ascending order
   *
   * @param {number[]} array array of numbers
  function ascending(array) {
    array.sort(function (a, b) {
      return a - b;
    });
  }
  */

  /**
   * Sort an array of numbers in descending order
   *
   * @param {number[]} array array of numbers
  function descending(array) {
    return array.sort((a, b) => b.localeCompare(a));
  }
  */

  /**
   * Get minimum value in array
   *
   * @param {number[]} array - Array of numbers
   * @returns {number}
   */
  function minArray(array) {
    return Math.min(...array); // using math.min() to get minimum value in array is faster than using a for loop
  }

  /**
   * Get maximum value in array
   *
   * @param {number[]} array
   * @returns {number}
   */
  function maxArray(array) {
    return Math.max(...array); // using math.max() to get maximum value in array is faster than using a for loop
  }

  /**
   * Remove duplicated Elemets in array
   *
   * @param {any} value
   * @returns {array}
   */
  function removeDuplicate(array) {
    array.filter(function (ele, index) {
      return [...new Set(array)];
    });

    // Strings

    /**
     *
     * @param {string} word string to be reversed
     * @returns {string}
     */
    function reverseString(word) {
      return word.split("").reverse().join("");
    }

    /**
     * Making first letter capital in the word
     *
     * @param {string} word
     * @returns {string}
     */
    function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }

    // Numbers

    /**
     * reverse a number (e.g. 12345 -> 54321)
     *
     * @param {number} number
     * @returns {number}
     */
    function reverseNum(number) {
      // this code is changed from the original one because it didn't work properly when the number is decimal
      if (number < 10 && number > -10) {
        return number;
      }
      const parsedNumber = +(number > 10 ? number : number * -1)
        .toString()
        .split("")
        .reverse()
        .join("");
      return number > 10 ? parsedNumber : parsedNumber * -1; // this code more readable than the other one also it works with decimals too
    }

    // Valid Checks

    /**
     * check if a number is even
     *
     * @param {number} number
     * @returns {boolean}
     */
    function isEven(number) {
      return number % 2 == 0;
    }

    /**
     * check if a number is odd
     *
     * @param {number} number
     * @returns {boolean}
     */
    function isOdd(number) {
      return number % 2 != 0;
    }

    /**
     * check if a string is a palindrome
     *
     * @param {string} word
     * @returns {boolean}
     */
    function isPalindrome(word) {
      return word.toString() == reverseString(word.toString());
    }

    /**
     * check if a number is prime
     *
     * @param {number} number
     * @returns {boolean}
     */
    function isPrime(number) {
      // this code is changed from the original one because it was causing infinite loop
      // when number % i never equals 0
      for (i = 2, s = Math.sqrt(number); i <= s; i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    }
  }
} catch (e) {
  throwError();
  function throwError() {
    return e;
  }
}
