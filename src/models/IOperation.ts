import Expression from "./Expression";

export default interface IOperation {
  left: Expression;
  operator: string;
  right: Expression;
}
