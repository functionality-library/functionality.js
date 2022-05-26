const reversestring = require("../project/js/functionality/reverseString.js");

it("always return a string", function () {
  expect(typeof reversestring("hello")).toBe("string");
});

it("always reverse the parameter", function () {
  expect(reversestring("hello")).toBe("olleh");
});

it("returns empty string if no parameter", function () {
  expect(reversestring()).toBe("");
});

it("returns empty string if the parameter is not a string", function () {
  expect(reversestring(5)).toBe("");
});

it("does not matter about multiple parameters", function () {
  expect(reversestring("hello", "world")).toBe("olleh");
});
