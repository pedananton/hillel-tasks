jest.mock("./utils/sanitizers");
jest.mock("./_max2");
import { asNumber } from "./utils/sanitizers";
import { _max2 } from "./_max2.js";

import { max2 } from "./max2.js";

describe("max2(a, b)", () => {
  it("should sanitize a, b and return _max2(a, b) result", () => {
    const a = 100;
    const b = 200;

    asNumber
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(2);

    _max2.mockReturnValue(3);

    const result = max2(a, b);

    expect(asNumber).toHaveBeenCalledWith(100);
    expect(asNumber).toHaveBeenCalledWith(200);
    expect(_max2).toHaveBeenCalledWith(1, 2);
    expect(result).toBe(3);
  });
});
