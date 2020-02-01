import * as index from "./index.js";

test("index.js should export all the functions", () => {
  expect(index).toEqual({
    max2: expect.any(Function),
  });
});
