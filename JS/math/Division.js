import { Arithmatic } from "./Arithmatic.js";

export class Division extends Arithmatic {
  constructor(divident, divisor, reminder, quotient) {
    super();
    this.divident = divident;
    this.divisor = divisor;
    this.reminder = reminder;
    this.quotient = quotient;
    this.dividentSign = +1;
    this.divisorSign = +1;
  }
  reverseSigns(operandName) {
    this[operandName] *= -1;
    this[operandName + "Sign"] = -1;
  }
}
