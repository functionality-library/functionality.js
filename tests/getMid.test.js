const getMid = require("../project/js/functionality/getMid");

it("always returns a number", function () {
  expect(typeof getMid(1, 2)).toBe("number");
});

it("always returns a number also if the parameters are string", function () {
  expect(typeof getMid("ali", "ahmed")).toBe("number");
});

it("always returns a zero if the first parameter is not a number", function () {
  expect(getMid("ali", 5)).toBe(0);
});

it("always returns a zero if the second parameter is not a number", function () {
  expect(getMid(5, "ali")).toBe(0);
});

it("returns the two parameters value if they are the same also if they are a string type", function () {
  expect(getMid("5", "5")).toBe(5);
});

it("returns the middle of two parameters", function () {
  expect(getMid(10, 20)).toBe(15);
});

it("returns the two parameters value if they are the same", function () {
  expect(getMid(5, 5)).toBe(5);
});

it("returns the first number if not Entering The Second Number", function () {
  expect(getMid(5)).toBe(5);
});

it("returns zero if the first parameter is not a number and the second parameter is not passing", function () {
  expect(getMid([1, 2, 3, 4])).toBe(0);
});

it("returns zero if there is no parameters", function () {
  expect(getMid()).toBe(0);
});
