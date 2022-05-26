const randomBoolean = require("../project/js/functionality/randomBoolean.js");

it("always return a boolean value", function () {
  expect(typeof randomBoolean()).toBe("boolean");
});

it("always return true or false only", function () {
  expect(randomBoolean()).toEqual(expect.any(Boolean));
});

it("does not matter about parameters", function () {
  expect(randomBoolean(5, 7)).toEqual(expect.any(Boolean));
});
