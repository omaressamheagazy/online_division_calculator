import * as helper from "./helper.js";
import { Division } from "./math/Division.js";

const division = new Division(10, 2);
let numberOfBitsUsed ,productBits;
let form = document.querySelector("form");
let button = document.getElementById("calcButton");
let dividentInput = document.getElementById("divident");
let divisorInput = document.getElementById("divisor");
let numberOfBitsInput = document.getElementById("numberOfBits");
let table = document.createElement("table");
form.onclick = (e) => {
  e.preventDefault();
  if (e.target == button) {
    division.divident =  +dividentInput.value;
    division.divisor =  +divisorInput.value;
    division.dividentSign = 1;
    division.divisorSign  = 1;
    numberOfBitsUsed = +numberOfBitsInput.value;
    if (isNaN(parseInt(division.divident)) || isNaN(parseInt(division.divisor)) || division.divisor == 0 ) {
      return null;
    }
    productBits = numberOfBitsUsed * 2;
    if (division.divident < 0) {
      division.reverseSigns("divident");
    }
    if (division.divisor < 0) {
      division.reverseSigns("divisor");
    }
    division.divisor = division.convertToBinary(division.divisor, numberOfBitsUsed) +"0".repeat(numberOfBitsUsed);
    division.divident = division.convertToBinary(division.divident, numberOfBitsUsed);
    division.reminder = "0".repeat(numberOfBitsUsed) + division.divident;
    division.quotient = division.convertToBinary(0, numberOfBitsUsed);
    // productBits = division.convertToBinary(0, productBits);
    table.innerHTML = helper.makeTableHeader(division.quotient, division.divisor, division.reminder);
    document.body.append(table);
    let tableBody = document.createElement("tbody");
    for (let index = 0; index < numberOfBitsUsed + 1; index++) {
      let firstRow = document.createElement("tr");
      let secondRow = document.createElement("tr");
      let thirdRow = document.createElement("tr");
      let fourthRow = document.createElement("tr");
      fourthRow.setAttribute("class","last_row");
      // let lasBit = helper.getLastBit(multi3plier);
    division.reminder = division.subtractBinary(
    division.reminder,
    division.divisor,
    productBits
    );
    let reminderBeforeAdd = division.reminder;
    if (division .convertToDecimal(division.reminder) < 0) {
      division.reminder = division.fixNumberOfBits(
        division.addBinaryNumbers(division.reminder, division.divisor),
        productBits
        );
        division.quotient = division.shiftBitToLeft(division.quotient, 0);
      } else {
        division.quotient = division.shiftBitToLeft(division.quotient, 1);
      }
      division.divisor = division.shiftBitToRight(division.divisor, 0);
      firstRow.innerHTML = `
              <td rowspan="4">${index + 1}</td>
              <td>R = R - D</td>
              <td></td>
              <td></td>
              <td>${reminderBeforeAdd}</td>
          `;
      secondRow.innerHTML = `
                <td rowspan = "2">${helper.displayOperaiton(division.convertToDecimal(reminderBeforeAdd))}</td>
                <td></td>
                <td></td>
                <td>${division.reminder}</td>
          `;
      thirdRow.innerHTML = `
                <td>${division.quotient}</td>
                <td></td>
                <td></td>
          `;
        fourthRow.innerHTML = `
                <td>Shift right</td>
                <td></td>
                <td>${division.divisor}</td>
                <td></td>
        `;
      table.appendChild(tableBody);
      tableBody.appendChild(firstRow);
      tableBody.appendChild(secondRow);
      tableBody.appendChild(thirdRow);
      tableBody.appendChild(fourthRow); 
    }
    // for checking 
    let quotientInDeciaml = division.convertToDecimal(division.quotient);
    let reminderInDecimal = division.convertToDecimal(division.reminder);
    let resultSummary = document.createElement("ul");
    let finalResult = document.createElement("li");
    let note1 = document.createElement("li");
    let note2 = null;
    reminderInDecimal = +division.dividentSign * +reminderInDecimal;
    note1.innerHTML = `
    Since the reminder should follow the divident sign,<br>
    the reminder will be <b> ${division.convertToBinary(reminderInDecimal,productBits)}</b> (${reminderInDecimal}) 
    `
    if (division.dividentSign != division.divisorSign) {
      note2= document.createElement("li");
      quotientInDeciaml *= -1;
      note2.innerHTML = `
      Since the the divident and divisor were were of opposite signs,<br> the quoitent will be negated
      so the quotient will be <b> ${division.convertToBinary(quotientInDeciaml,numberOfBitsUsed)} </b> (${quotientInDeciaml})
      `
    }
    finalResult.innerHTML = `
    Quotinet = ${quotientInDeciaml} = ${division.convertToBinary(quotientInDeciaml,numberOfBitsUsed)} <br>
    Reminder = ${reminderInDecimal} = ${division.convertToBinary(reminderInDecimal,productBits)}
    `
    if(note2 != null) {
      resultSummary.appendChild(note2);
    }
    resultSummary.appendChild(note1);
    resultSummary.appendChild(finalResult);
    if (document.getElementsByTagName("ul").length != 0) {
      document.getElementsByTagName("ul")[0].remove();
    }
    document.body.appendChild(resultSummary);
  }
};


