import IOperation from "./IOperation";

export default interface IEquation {
  left: IOperation | number | string;
  right: IOperation | number | string;
}
