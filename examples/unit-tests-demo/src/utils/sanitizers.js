export const INVALID_STRING = "<invalid string>";
export const INVALID_NUMBER =NaN;

export function asNumber(value) {
  if (typeof value !== "number") {
    return INVALID_NUMBER;
  }

  return value;
}

export function asString(value) {
  if (typeof value !== "string") {
    return INVALID_STRING;
  }

  return value;
}
