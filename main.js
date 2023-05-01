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

let operatorLabel;

let secondNumb;

let numbClickCount = 0;

const display = document.getElementById("display");

const numberBtns = Array.from(document.getElementsByClassName("numbBtn"));

const operatorBtns = Array.from(document.getElementsByClassName("operatorBtn"));

const allClearBtn = document.querySelector(".AC");

const plusBtn = document.querySelector(".add");

// function cleanDisplay() {
//   display.textContent = "0";
//   numbClickCount = 0;
//   console.log(numbClickCount);
// }

const getNumber = (event) => {
  console.log(numbClickCount);

  numberClicked = event.target.textContent;

  currentDisplay = display.textContent;

  if (display.textContent === "0") {
    currentDisplay = "";
  }
  if (firstNumb != null && numbClickCount == 0) {
    currentDisplay = "";
  }
  display.textContent = `${currentDisplay}${numberClicked}`;
  killNumbers();
  return numbClickCount++;
};
// Number Button Event Handler

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

// capture number in display and save to firstNumb
// capture the operator and save to operator
// clear input for next number

const getOperator = (event) => {
  firstNumb = display.textContent;
  operatorLabel = event.currentTarget.classList[0];
  console.log(firstNumb);
  console.log(operatorLabel);
  numbClickCount = 0;
};

operatorBtns.forEach(function (button) {
  button.addEventListener("click", getOperator);
});
