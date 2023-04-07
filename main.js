// Operator Functions

function add(numb1, numb2) {
  return numb1 + numb2;
}

function subtract(numb1, numb2) {
  return numb1 - numb2;
}

function multiply(numb1, numb2) {
  return numb1 * numb2;
}

function divide(numb1, numb2) {
  return numb1 / numb2;
}

function operate(operator, numb1, numb2) {
  return operator(numb1, numb2);
}

let firstNumb;

let operator;

let secondNumb;

const display = document.getElementById("display");

let displayValue = display.textContent;

const numberButtons = Array.from(document.getElementsByClassName("numbBtn"));

console.log(numberButtons);

function logIt(event) {
  console.log(event.target);
}

// numberButtons[9].addEventListener("click", logIt);

numberButtons.forEach(function (button) {
  button.addEventListener("click", logIt);
});
