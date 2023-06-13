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

let firstNumb = null;

let operator;

let operatorCount = 0;

let operatorLabel = null;

let secondNumb;

let answer;

let numbClickCount = 0;

let solved;

const display = document.getElementById("display");

const numberBtns = Array.from(document.getElementsByClassName("numbBtn"));

const decimal = document.querySelector(".decimal");

const operatorBtns = Array.from(document.getElementsByClassName("operatorBtn"));

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
  numbClickCount = 0;
  activateNumbers();
}

clear.addEventListener("click", clearDisplay);

function solveCheck() {
  if (solved == true) {
    display.textContent = "";
    solved = false;
  }
}
// This prevents concatenation of strings in display after evaluating a problem

function operatorCheck() {
  if (operatorLabel != null) {
    return true;
  } else {
    return false;
  }
}
// Checks if operator is defined

const getNumber = (event) => {
  solveCheck();
  numbClickCount + 1;

  numberClicked = event.target.textContent;
  // capture number from button clicked

  currentDisplay = display.textContent;

  if (display.textContent === "0") {
    currentDisplay = "";
  }
  // removes 0 from display when a number is clicked

  if (firstNumb != null && numbClickCount == 0) {
    currentDisplay = "";
  }
  // resets display for second number

  display.textContent = `${currentDisplay}${numberClicked}`;
  // displays number
  if (firstNumb != null) {
    operatorLabel = potentialOperatorLabel;
    console.log("confirmed operator :", operatorLabel);
  }
  // confirms operator - operator is confirmed here so that the operator can be updated up until the second number is chosen

  return numbClickCount++;
};
// Number Button Event Handler

function killNumbers() {
  if (numbClickCount > 6) {
    numberBtns.forEach(function (button) {
      button.removeEventListener("click", getNumber);
    });
  }
}

function activateNumbers() {
  if (numbClickCount < 7) {
    numberBtns.forEach(function (button) {
      button.addEventListener("click", getNumber);
    });
  }
}
activateNumbers();

function getOperator(event) {
  numbClickCount = 0;
  activateNumbers();

  if (solved == true) {
    firstNumb = display.textContent;
  }

  if (firstNumb == null) {
    firstNumb = display.textContent;
    console.log(`First number = ${firstNumb}`);
  }

  potentialOperatorLabel = event.currentTarget.classList[0];
  // sets operator based on operator button used
  console.log("potential operator: ", potentialOperatorLabel);

  if (firstNumb != null && operatorCheck() == true) {
    secondNumb = display.textContent;
    firstNumb = calculate();
    console.log(firstNumb);
  }

  solving();
}

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
// Prevents equals button from being used after problem is solved

function calculate() {
  if (operatorLabel == null) {
    solved = true;
    return;
  }

  secondNumb = display.textContent;
  console.log(`Second number = ${secondNumb}`);

  if (operatorLabel == "add") {
    operator = add;
  } else if (operatorLabel == "subtract") {
    operator = subtract;
  } else if (operatorLabel == "divide" && secondNumb == 0) {
    firstNumb = null;
    secondNumb = null;
    solved = true;
    notSolving();
    return (answer = display.textContent = "NOPE");
  } else if (operatorLabel == "divide") {
    operator = divide;
  } else if (operatorLabel == "multiply") {
    operator = multiply;
  }
  answer = operate(operator, firstNumb, secondNumb);
  display.textContent = Math.round((answer + Number.EPSILON) * 100) / 100;
  roundedAnswer = display.textContent;
  operatorLabel = null;
  firstNumb = roundedAnswer;
  secondNumb = null;
  solved = true;
  notSolving();
  return roundedAnswer;
}
