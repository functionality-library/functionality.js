import sumOfArray from './sumOfArray';
import capitalize from './capitalize';
import filterArray from './filterArray';
import getFactors from './getFactors';
import getMid from './getMid';
import isEven from './isEven';
import isOdd from './isOdd';
import isPrime from './isPrime';
import isPalindrome from './isPalindrome';
import maxArray from './maxArray';
import minArray from './minArray';
import randomBoolean from './randomBoolean';
import randomElementFrom from './randomElementFrom';
import randomHex from './randomHex';
import randomNum from './randomNum';
import removeDuplicate from './removeDuplicate';
import reverseString from './reverseString';
import reverseNum from './reverseNum';

const functionality = {
  sumOfArray,
  capitalize,
  filterArray,
  getFactors,
  getMid,
  isEven,
  isOdd,
  isPrime,
  isPalindrome,
  maxArray,
  minArray,
  randomBoolean,
  randomElementFrom,
  randomHex,
  randomNum,
  removeDuplicate,
  reverseString,
  reverseNum,
}

declare global {
    interface Window {
      functionality: typeof functionality;
    }
}
window.functionality = functionality;
// export * from "./sumOfArray";
export default functionality;