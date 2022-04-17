import { addBinary } from "./addBinary.js";
import { twosComplement } from "./twoComplment.js";
export class Arithmatic {
  shiftBitToRight(number, bitToInsert) {
    number = number.split("");
    let length = number.unshift(bitToInsert);
    return number.join("").slice(0, length - 1);
  }
  shiftBitToLeft(number, bitToInsert) {
    number = number.split("");
    number.push(bitToInsert);
    return number.join("").slice(1);
  }
  getLastBit(number) {
    return number[number.length - 1];
  }
  convertToDecimal(number) {
    let firstBitPosition = number.length - 1;
    return parseInt(number.slice(1), 2) + -(number[0] * 2 ** firstBitPosition);
  }
  fixNumberOfBits(number, NumberOfproductBit) {
    return number.length > NumberOfproductBit
      ? (number = number.slice(1))
      : number;
  }
  addBinaryNumbers(firstOperand, secondOperand) {
    return addBinary(firstOperand, secondOperand);
  }
  /**
   * difference = minend  + ( -subtrahend );
   * @param {string} minuend
   * @param {string} subtrahend
   * @param {int} productBits
   * @returns { string } binary
   */
  subtractBinary(minuend, subtrahend, productBits) {
    let negationsubtrahend = this.convertToBinary(
      -this.convertToDecimal(subtrahend),
      productBits
    );
    return this.fixNumberOfBits(
      addBinary(minuend, negationsubtrahend),
      productBits
    );
  }
  /**
   *
   * @param {int} number
   * @param {int} numberOfBitUsed
   * @returns {string} reurtrn  binary representation of decimal number using 2's complment
   */
  convertToBinary(number, numberOfBitUsed) {
    return twosComplement(number, numberOfBitUsed);
  }
}
