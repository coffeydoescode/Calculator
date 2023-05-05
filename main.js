// Operator Functions

function add(firstNumb, secondNumb) {
  return firstNumb + secondNumb;
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

// console.log(operate(add, 1, 2));

let firstNumb;

let operator;

let operatorLabel;

let secondNumb;

let numbClickCount = 0;

const display = document.getElementById("display");

const numberBtns = Array.from(document.getElementsByClassName("numbBtn"));

const operatorBtns = Array.from(document.getElementsByClassName("operatorBtn"));

const allClearBtn = document.querySelector(".AC");

const equalsBtn = document.querySelector(".equals");

const clear = document.querySelector(".AC");

function clearDisplay() {
  display.textContent = "";
  numbClickCount = 0;
}

clear.addEventListener("click", clearDisplay);

const getNumber = (event) => {
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
  // console.log(operatorLabel, operator);
  let answer = operate(operator, firstNumb, secondNumb);
  display.textContent = answer;
}
