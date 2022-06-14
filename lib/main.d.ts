import sumOfArray from "./array/sumOfArray";
import capitalize from "./string/capitalize";
import filterArray from "./array/filterArray";
import getFactors from "./array/getFactors";
import getMid from "./number/getMid";
import isEven from "./number/isEven";
import isOdd from "./number/isOdd";
import isPrime from "./number/isPrime";
import isPalindrome from "./string/isPalindrome";
import maxArray from "./array/maxArray";
import minArray from "./array/minArray";
import randomBoolean from "./colors/randomBoolean";
import randomElementFrom from "./array/randomElementFrom";
import randomHex from "./colors/randomHex";
import randomNumber from "./number/randomNumber";
import removeDuplicate from "./array/removeDuplicate";
import reverseString from "./string/reverseString";
import reverseNumber from "./number/reverseNumber";
import shuffle from "./array/shuffle";
import randomString from "./string/randomString";
import randomColor from "./colors/randomColor";
import randomHsl from "./colors/randomHsl";
import isHappyNumber from "./number/isHappyNumber";
import randomPassword from "./string/randomPassword";
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
