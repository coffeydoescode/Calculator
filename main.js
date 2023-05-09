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

let firstNumb;

let operator;

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
  console.log(currentNumb);
  currentNumb.pop();
  let newNumb = currentNumb.join("");
  display.textContent = newNumb;
  console.log(numbClickCount);
  activateNumbers();
}

backspace.addEventListener("click", deleteDigit);

function clearDisplay() {
  display.textContent = "0";
  numbClickCount = 0;
  console.log(numbClickCount);
  activateNumbers();
}

clear.addEventListener("click", clearDisplay);

function solveCheck() {
  if (solved == true) {
    solved = false;

    clearDisplay();
  }
}
// This prevents concatenation of strings in display after evaluating a problem

const getNumber = (event) => {
  solveCheck();
  console.log(numbClickCount);

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
  firstNumb = Number(display.textContent);
  operatorLabel = event.currentTarget.classList[0];
  console.log(firstNumb);
  console.log(operatorLabel);
  numbClickCount = 0;
};

operatorBtns.forEach(function (button) {
  button.addEventListener("click", getOperator);
});

equalsBtn.addEventListener("click", calculate);

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
  console.log(operatorLabel, operator);
  answer = operate(operator, firstNumb, secondNumb);
  display.textContent = answer;

  solved = true;
}
