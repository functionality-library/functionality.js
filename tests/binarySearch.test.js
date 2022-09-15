const binarySearch = require("../project/arrays/binarySearch");

it("throws error on unsorted arrays", () => {
  expect(() => binarySearch([3, 4, 5, 2], 2)).toThrowError();
});

it("finds target in sorted array correctly or return -1", () => {
  expect(binarySearch([5, 10, 17, 20, 23], 20)).toEqual(3);
  expect(binarySearch([5, 10, 17, 20, 23], 17)).toEqual(2);
  expect(binarySearch([-10, -5, -2, 0, 10, 30], -2)).toEqual(2);
  expect(binarySearch([-10, -5, -2, 0, 10], 10)).toEqual(4);
  expect(binarySearch([-10, -5, -2, 0, 10, 30], 11)).toEqual(-1);
  expect(binarySearch([], 300)).toEqual(-1);
  expect(binarySearch([2], 2)).toEqual(0);
  expect(binarySearch([], 2)).toEqual(-1);
});
