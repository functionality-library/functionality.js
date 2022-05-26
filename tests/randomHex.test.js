const randomHex = require("../project/js/functionality/randomHex");

it("always returns a colour", () => {
  const colours = Array(100)
    .fill(null)
    .map(() => randomHex());

  colours.every((colour) => expect(colour).toMatch(/^#[\da-f]{6}$/));
});

it("doesn't always return the same colour", () => {
  const colours = Array(100)
    .fill(null)
    .map(() => randomHex());

  expect(new Set(colours).size).toBeGreaterThan(1);
  // or a higher number, but e.g. `.toEqual(colours.length)` can fail due to collisions
});
