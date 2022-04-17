/**
 * This function is used to diplay the operation, if the last bit is zero, otherwise it will display no operation
 * @param {int} lastBit 
 * @returns {string}
 */
export function displayOperaiton(reminder) {
  return +reminder < 0 ? "R< 0; R= D+R. Q: shif Left(+0)" : "No Operation. Q: Shift Left(+1)";
}
/**
 * @param {string} multiplierInTwoForm 
 * @param {string} multiplicandInTwoFrom 
 * @param {string} product 
 * @returns {string}
 */
export function makeTableHeader(quotient,divisor,reminder) {
  return `
    <thead>
      <tr>
        <th>Iteration</th>
        <th>Step</th>
        <th>Quotient (Q)</th>
        <th>Divisor (D)</th>
        <th>Remainder (R)</th>
      </tr>
      <tr>
        <th>0</th>
        <th>Initial Value</th>
        <th>${quotient}</th>
        <th>${divisor}</th>
        <th>${reminder}</th>
      </tr>
    </thead>
  `;
}
