const isPalindrome = require("../project/js/functionality/isPalindrome.js");

it("always returns a boolean value", function () {
  expect(typeof isPalindrome("123")).toBe("boolean");
});

it("returns true if word is palindrome", function () {
  expect(isPalindrome("mum")).toBe(true);
});

it("returns false if word is not palindrome", function () {
  expect(isPalindrome("muom")).toBe(false);
});

it("returns true if word is palindrome also if the parameter is number", function () {
  expect(isPalindrome(121)).toBe(true);
});

it("returns false if word is not palindrome also if the parameter is number", function () {
  expect(isPalindrome(123)).toBe(false);
});

it("returns empty string if there is no parameter", function () {
  expect(isPalindrome()).toBe("");
});
