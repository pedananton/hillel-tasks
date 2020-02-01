import { _max2 } from "./_max2.js";

test.each([
  [0, 0, 0],
  [1, 0, 1],
  [0, 1, 1],
  [0.3 - 0.1, 0.2, 0.2],
])("_max2(%d, %d) should equal %d", (a, b, expectedValue) => {
  expect(_max2(a, b)).toBe(expectedValue);
});
