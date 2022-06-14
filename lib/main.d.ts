import sumOfArray from "./arrays/sumOfArray";
import capitalize from "./strings/capitalize";
import filterArray from "./arrays/filterArray";
import getFactors from "./arrays/getFactors";
import getMid from "./numbers/getMid";
import isEven from "./numbers/isEven";
import isOdd from "./numbers/isOdd";
import isPrime from "./numbers/isPrime";
import isPalindrome from "./strings/isPalindrome";
import maxArray from "./arrays/maxArray";
import minArray from "./arrays/minArray";
import randomBoolean from "./randoms/randomBoolean";
import randomElementFrom from "./arrays/randomElementFrom";
import randomHex from "./randoms/randomHex";
import randomNumber from "./randoms/randomNumber";
import removeDuplicate from "./arrays/removeDuplicate";
import reverseString from "./strings/reverseString";
import reverseNumber from "./numbers/reverseNumber";
import shuffle from "./arrays/shuffle";
import randomString from "./randoms/randomString";
import randomColor from "./randoms/randomColor";
import randomHsl from "./randoms/randomHsl";
import isHappyNumber from "./numbers/isHappyNumber";
import randomPassword from "./randoms/randomPassword";
declare const functionality: {
    sumOfArray: typeof sumOfArray;
    capitalize: typeof capitalize;
    filterArray: typeof filterArray;
    getFactors: typeof getFactors;
    getMid: typeof getMid;
    isEven: typeof isEven;
    isOdd: typeof isOdd;
    isPrime: typeof isPrime;
    isPalindrome: typeof isPalindrome;
    maxArray: typeof maxArray;
    minArray: typeof minArray;
    randomBoolean: typeof randomBoolean;
    randomElementFrom: typeof randomElementFrom;
    randomHex: typeof randomHex;
    randomNumber: typeof randomNumber;
    removeDuplicate: typeof removeDuplicate;
    reverseString: typeof reverseString;
    reverseNumber: typeof reverseNumber;
    shuffle: typeof shuffle;
    randomString: typeof randomString;
    randomColor: typeof randomColor;
    randomHsl: typeof randomHsl;
    isHappyNumber: typeof isHappyNumber;
    randomPassword: typeof randomPassword;
};
declare global {
    interface Window {
        functionality: typeof functionality;
    }
}
export default functionality;
