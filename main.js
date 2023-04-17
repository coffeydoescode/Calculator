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

let numbClickCount = 0;

const display = document.getElementById("display");

const numberBtns = Array.from(document.getElementsByClassName("numbBtn"));

const operatorBtns = Array.from(document.getElementsByClassName("operatorBtn"));

const getNumber = (event) => {
  currentDisplay = display.textContent;

  numberClicked = event.target.textContent;

  if (currentDisplay == "0") {
    currentDisplay = "";
  }
  display.textContent = `${currentDisplay}${numberClicked}`;
  killNumbers();
  return numbClickCount++;
};
// Number Button event handler

function killNumbers() {
  if (numbClickCount === 7) {
    numberBtns.forEach(function (button) {
      button.removeEventListener("click", getNumber);
    });
  }
}

numberBtns.forEach(function (button) {
  button.addEventListener("click", getNumber);
});
