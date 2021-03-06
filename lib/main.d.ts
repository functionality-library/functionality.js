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
import addCommas from "./numbers/addCommas";
import shuffle from "./arrays/shuffle";
import randomString from "./randoms/randomString";
import randomColor from "./randoms/randomColor";
import randomHsl from "./randoms/randomHsl";
import isHappyNumber from "./numbers/isHappyNumber";
import randomPassword from "./randoms/randomPassword";
import rgbToHex from "./converts/rgbToHex";
import hexToRgb from "./converts/hexToRgb";
import rgbToHsl from "./converts/rgbToHsl";
import hslToRgb from "./converts/hslToRgb";
import removeInnerSpace from "./strings/removeInnerSpace";
import getBrowser from "./user/getBrowser";
import getMonths from "./user/getMonths";
import getWeeks from "./user/getWeeks";
import getDays from "./user/getDays";
import getHours from "./user/getHours";
import getMinutes from "./user/getMinutes";
import getSeconds from "./user/getSeconds";
import getBirthday from "./user/getBirthday";
import copy from "./user/copy";
import select from "./dom/select";
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
    addCommas: typeof addCommas;
    removeDuplicate: typeof removeDuplicate;
    reverseString: typeof reverseString;
    reverseNumber: typeof reverseNumber;
    shuffle: typeof shuffle;
    randomString: typeof randomString;
    randomColor: typeof randomColor;
    randomHsl: typeof randomHsl;
    isHappyNumber: typeof isHappyNumber;
    randomPassword: typeof randomPassword;
    rgbToHex: typeof rgbToHex;
    hexToRgb: typeof hexToRgb;
    rgbToHsl: typeof rgbToHsl;
    hslToRgb: typeof hslToRgb;
    removeInnerSpace: typeof removeInnerSpace;
    getBrowser: typeof getBrowser;
    getMonths: typeof getMonths;
    getWeeks: typeof getWeeks;
    getDays: typeof getDays;
    getHours: typeof getHours;
    getMinutes: typeof getMinutes;
    getSeconds: typeof getSeconds;
    getBirthday: typeof getBirthday;
    copy: typeof copy;
    select: typeof select;
};
declare global {
    interface Window {
        functionality: typeof functionality;
    }
}
export default functionality;
