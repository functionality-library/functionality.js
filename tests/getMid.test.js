const getMid = require("../project/js/functionality/getMid");

it("always returns a number", function () {
  expect(typeof getMid(1, 2)).toBe("number");
});

it("always returns a number2", function () {
  expect(typeof getMid("ali", "ahmed")).toBe("number");
});

it("always returns a number2", function () {
  expect(getMid("ali", 5)).toBe(0);
});

it("always returns a number2", function () {
  expect(getMid(5, "ali")).toBe(0);
});

it("always returns a number2", function () {
  expect(getMid("5", "5")).toBe(5);
});

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
  expect(getMid([1, 2, 3, 4])).toBe(0);
});

it("Not Entering Any Number", function () {
  expect(getMid()).toBe(0);
});
