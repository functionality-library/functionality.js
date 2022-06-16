const capitalize = require("../project/js/functionality/capitalize.js");

it("always make the first letter capital", function () {
  expect(capitalize("hello")).toBe("Hello");
});

it("returns any value type", function () {
  expect(capitalize("hello")).toEqual(expect.anything());
});

it("returns empty if no parameter", function () {
  expect(capitalize()).toBe("");
});
