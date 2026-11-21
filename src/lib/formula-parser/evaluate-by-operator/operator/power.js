import { toNumber } from "./../../helper/number.js";
import { listOperation } from "./../../helper/list.js";
import { ERROR_VALUE } from "./../../error.js";
export var SYMBOL = "^";
export default function func(exp1, exp2) {
  // DocCells : listes (helper/list.js).
  if (Array.isArray(exp1) || Array.isArray(exp2)) return listOperation(SYMBOL, exp1, exp2);
  var result = Math.pow(toNumber(exp1), toNumber(exp2));

  if (isNaN(result)) {
    throw Error(ERROR_VALUE);
  }

  return result;
}
func.SYMBOL = SYMBOL;