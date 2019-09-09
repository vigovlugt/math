import IOperation from "./models/IOperation";
import Operators from "./constants/Operators";
import Expression from "./models/Expression";

export default class Operation implements IOperation {
  public left: Expression;
  public operator: string;
  public right: Expression;

  constructor(operation: IOperation) {
    this.left = operation.left;
    this.operator = operation.operator;
    this.right = operation.right;
  }

  toString() {
    return `${this.left.toString()} ${
      Operators[this.operator].char
    } ${this.right.toString()}`;
  }
}
