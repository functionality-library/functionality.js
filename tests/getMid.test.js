const getMid = require("../project/js/functionality.js");

it("return the middle of two numbers", function () {
  expect(getMid(10, 20)).toBe(15);
});

it("Entering Same Two numbers", function () {
  expect(getMid(5, 5)).toBe(5);
});

it("Not Entering The Second Number", function () {
  expect(getMid(5)).toBe(5);
});

it("Not Entering Any Number", function () {
  expect(getMid()).toBe(0);
});
