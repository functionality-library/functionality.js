import sumOfArray from "./sumOfArray";
import capitalize from "./capitalize";
import filterArray from "./filterArray";
import getFactors from "./getFactors";
import getMid from "./getMid";
import isEven from "./isEven";
import isOdd from "./isOdd";
import isPrime from "./isPrime";
import isPalindrome from "./isPalindrome";
import maxArray from "./maxArray";
import minArray from "./minArray";
import randomBoolean from "./randomBoolean";
import randomElementFrom from "./randomElementFrom";
import randomHex from "./randomHex";
import randomNumber from "./randomNumber";
import removeDuplicate from "./removeDuplicate";
import reverseString from "./reverseString";
import reverseNumber from "./reverseNumber";
import shuffle from "./shuffle";
import randomString from "./randomString";
import randomColor from "./randomColor";
import randomHsl from "./randomHsl";
import isHappyNumber from "./isHappyNumber";
import randomPassword from "./randomPassword";

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
  randomNumber,
  removeDuplicate,
  reverseString,
  reverseNumber,
  shuffle,
  randomString,
  randomColor,
  randomHsl,
  isHappyNumber,
  randomPassword,
};

declare global {
  interface Window {
    functionality: typeof functionality;
  }
}
window.functionality = functionality;
// export * from "./sumOfArray";
export default functionality;
