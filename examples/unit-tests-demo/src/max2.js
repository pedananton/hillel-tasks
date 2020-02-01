import { asNumber } from "./utils/sanitizers.js";
import { _max2 } from "./_max2.js";

export function max2(a, b) {
  return _max2(asNumber(a), asNumber(b));
}
