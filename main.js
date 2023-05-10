// Operator Functions

function add(firstNumb, secondNumb) {
  return Number(firstNumb) + Number(secondNumb);
}

function subtract(firstNumb, secondNumb) {
  return firstNumb - secondNumb;
}

function multiply(firstNumb, secondNumb) {
  return firstNumb * secondNumb;
}

function divide(firstNumb, secondNumb) {
  return firstNumb / secondNumb;
}

function operate(operator, firstNumb, secondNumb) {
  return operator(firstNumb, secondNumb);
}

// Global Variables

let firstNumb;

let operator;

let operatorCount = 0;

let operatorLabel;

let secondNumb;

let answer;

let numbClickCount = 0;

let solved;

const display = document.getElementById("display");

const numberBtns = Array.from(document.getElementsByClassName("numbBtn"));

const operatorBtns = Array.from(document.getElementsByClassName("operatorBtn"));

const allClearBtn = document.querySelector(".AC");

const equalsBtn = document.querySelector(".equals");

const clear = document.querySelector(".AC");

const backspace = document.querySelector(".backspace");

function deleteDigit() {
  numbClickCount = numbClickCount - 1;
  let currentNumb = Array.from(display.textContent);
  currentNumb.pop();
  let newNumb = currentNumb.join("");
  display.textContent = newNumb;
  activateNumbers();
}

backspace.addEventListener("click", deleteDigit);

function clearDisplay() {
  display.textContent = "0";
  firstNumb = null;
  secondNumb = null;
  activateNumbers();
}

clear.addEventListener("click", clearDisplay);

function solveCheck() {
  if (solved == true) {
    solved = false;
  }
}
// This prevents concatenation of strings in display after evaluating a problem

const getNumber = (event) => {
  solveCheck();
  numbClickCount + 1;

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
  if (numbClickCount == 7) {
    numberBtns.forEach(function (button) {
      button.removeEventListener("click", getNumber);
    });
  }
}

function activateNumbers() {
  if (numbClickCount <= 7) {
    numberBtns.forEach(function (button) {
      button.addEventListener("click", getNumber);
    });
  }
}
activateNumbers();

const getOperator = (event) => {
  operatorCount += 1;
  if (firstNumb != null) {
    secondNumb = display.textContent;
    calculate();
  }

  firstNumb = display.textContent;
  operatorLabel = event.currentTarget.classList[0];
  numbClickCount = 0;
  solving();
};

operatorBtns.forEach(function (button) {
  button.addEventListener("click", getOperator);
});

solving();

function solving() {
  equalsBtn.addEventListener("click", calculate);
}

function notSolving() {
  equalsBtn.removeEventListener("click", calculate);
}

function calculate() {
  secondNumb = display.textContent;
  if (operatorLabel == "add") {
    operator = add;
  } else if (operatorLabel == "subtract") {
    operator = subtract;
  } else if (operatorLabel == "divide") {
    operator = divide;
  } else if (operatorLabel == "multiply") {
    operator = multiply;
  }
  answer = operate(operator, firstNumb, secondNumb);
  display.textContent = answer;
  firstNumb = null;
  secondNumb = null;
  solved = true;
  notSolving();
}
