import Operation from "./Operation";
import IEquation from "./models/IEquation";
import IOperation from "./models/IOperation";
import { isIOperation } from "./helpers/TypeHelpers";

export default class Equation implements IEquation {
  public left: Operation | number | string;
  public right: Operation | number | string;

  constructor(
    left: IOperation | number | string,
    right: IOperation | number | string
  ) {
    this.left = isIOperation(left) ? new Operation(left) : left;
    this.right = isIOperation(right) ? new Operation(right) : right;
  }

  translateEquation(expressionPath: number[]) {
    for (let i = 0; i < expressionPath.length; i++) {
      const curSide = expressionPath[i];
    }
  }

  copy = () => new Equation(this.left, this.right);
  toString = () => `${this.left.toString()} = ${this.right.toString()}`;
  log = () => console.log(this.toString());
}
// x + y = 2
const eq = new Equation({ left: "x", operator: "add", right: "y" }, 2);
eq.copy().log();
