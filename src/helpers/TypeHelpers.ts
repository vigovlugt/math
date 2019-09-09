import IOperation from "../models/IOperation";

export function isIOperation(object: any): object is IOperation {
  return (
    typeof object == "object" &&
    "left" in object &&
    "operator" in object &&
    "right" in object
  );
}
