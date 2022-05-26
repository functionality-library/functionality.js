const reverseNum = require("../project/js/functionality/reverseNum.js");

it("always returns a number", function () {
  expect(typeof reverseNum(123)).toBe("number");
});

it("returns the number reversed", function () {
  expect(reverseNum(123)).toBe(321);
});

it("returns empty string if there is no parameter", function () {
  expect(reverseNum()).toBe("");
});

it("returns the number if it its length equal to 1", function () {
  expect(reverseNum(0)).toBe(0);
});

it("does not reverse the negative sign when reversing number", function () {
  expect(reverseNum(-123)).toBe(-321);
});
