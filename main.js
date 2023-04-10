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

// console.log(numberButtons);

const getNumber = function logIt(event) {
  currentDisplay = display.textContent;
  numberClicked = event.target.innerText;
  display.textContent = numberClicked;
  display.textContent = `${currentDisplay}${numberClicked}`;
};
// Number Button event handler

numberButtons.forEach(function (button) {
  button.addEventListener("click", getNumber);
});
// Number Button Event

// function updateDisplay() {
//   currentDisplay = display.textContent;
//   display.textContent = `${currentDisplay}${getNumber()}`;
// }
