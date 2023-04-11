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

const getNumber = (event) => {
  currentDisplay = display.textContent;

  numberClicked = event.target.textContent;

  if (display.textContent == "0") {
    currentDisplay = "";
  }
  display.textContent = `${currentDisplay}${numberClicked}`;
};
// Number Button event handler

numberButtons.forEach(function (button) {
  button.addEventListener("click", getNumber);
});
// Number Button Event
