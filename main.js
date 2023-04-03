// Operator Functions

function add(numb1, numb2) {
  return numb1 + numb2;
}

console.log(add(91, 9));

function subtract(numb1, numb2) {
  return numb1 - numb2;
}

console.log(subtract(90, 1000));

function multiply(numb1, numb2) {
  return numb1 * numb2;
}

console.log(multiply(9, 1000));

function divide(numb1, numb2) {
  return numb1 / numb2;
}

console.log(divide(50, 10));

function operate(operator, numb1, numb2) {
  return operator(numb1, numb2);
}

console.log(operate(subtract, 5, 3));

let firstNumb;

let mathOperator;

let secondNumb;
