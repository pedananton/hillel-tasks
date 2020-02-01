import * as sanitizers from "./sanitizers.js";

describe("constants", () => {
  test(`INVALID_STRING should be '<invalid string>'`, () => {
    expect(sanitizers.INVALID_STRING).toBe("<invalid string>");
  });

  test(`INVALID_NUMBER should be NaN`, () => {
    expect(sanitizers.INVALID_NUMBER).toBe(NaN);
  });
});

describe("asNumber", () => {
  it("should passthrough numbers", () => {
    const number = Math.random();
    const sanitized = sanitizers.asNumber(number);

    expect(sanitized).toBe(number);
  });

  it(`should return ${sanitizers.INVALID_NUMBER} for non-numbers`, () => {
    const nonNumber = "0";
    const sanitized = sanitizers.asNumber(nonNumber);

    expect(sanitized).toBe(sanitizers.INVALID_NUMBER);
  });
});

describe("asString", () => {
  it("should passthrough strings", () => {
    const string = "123";
    const sanitized = sanitizers.asString(string);

    expect(sanitized).toBe(string);
  });

  it(`should return ${sanitizers.INVALID_STRING} for non-strings`, () => {
    const nonString = 123;
    const sanitized = sanitizers.asString(nonString);

    expect(sanitized).toBe(sanitizers.INVALID_STRING);
  });
});
