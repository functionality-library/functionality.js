const reverseString = require("../project/js/functionality/reverseString.js");

it("always return a string", function () {
  expect(typeof reverseString("hello")).toBe("string");
});

it("always reverse the parameter", function () {
  expect(reverseString("hello")).toBe("olleh");
});

it("returns empty string if no parameter", function () {
  expect(reverseString()).toBe("");
});

it("returns empty string if the parameter is not a string", function () {
  expect(reverseString(5)).toBe("");
});

it("does not matter about multiple parameters", function () {
  expect(reverseString("hello", "world")).toBe("olleh");
});
