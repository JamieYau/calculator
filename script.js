function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) return null;
  return num1 / num2;
}

function operate(operator, num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "×":
      return multiply(num1, num2);
    case "÷":
      return divide(num1, num2);
    default:
      return null;
  }
}

currentNum = "";
currentOperator = "";
previousNum = "";

currentDisplay = document.querySelector(".current-text");
operatorDisplay = document.querySelector(".operator-text");
previousDisplay = document.querySelector(".previous-text");

////////////////////////////////Number btns////////////////////////////////
numButtons = document.querySelectorAll(".digits");
numButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleNums(e.target.textContent);
  });
});

function handleNums(num) {
  currentNum += num;
  currentDisplay.textContent = currentNum;
  operatorDisplay.textContent = currentOperator;
}

////////////////////////////////Operator btns////////////////////////////////
operators = document.querySelectorAll(".operators");
operators.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleOperators(e.target.textContent);
  });
});

function handleOperators(value) {
  //If something has already been calulated then operators will calculate prior.
  if (currentNum !== "" && previousNum !== "") calulate();
  currentOperator = value;
  currentDisplay.textContent = currentOperator;
  previousNum = currentNum;
  previousDisplay.textContent = previousNum;
  currentNum = "";
}

////////////////////////////////All Clear btn////////////////////////////////
ac = document.querySelector(".all-clear");
ac.addEventListener("click", clearCalc);

function clearCalc() {
  currentNum = "";
  currentOperator = "";
  previousNum = "";
  currentDisplay.textContent = "";
  previousDisplay.textContent = "";
  operatorDisplay.textContent = "";
}

////////////////////////////////Delete btn////////////////////////////////
del = document.querySelector(".delete");
del.addEventListener("click", deletetxt);

function deletetxt() {
  currentNum = currentNum.toString().slice(0, -1);
  currentDisplay.textContent = currentNum;
}

////////////////////////////////Decimal////////////////////////////////
decimal = document.querySelector('.decimal');
decimal.addEventListener('click', addPoint);
function addPoint() {
  currentNum += ".";
  currentDisplay.textContent = currentNum;
}

////////////////////////////////Equals btn////////////////////////////////
equals = document.querySelector(".equals");
equals.addEventListener("click", calulate);

function calulate() {
  if (currentOperator !== "") {
    currentNum = operate(currentOperator, previousNum, currentNum);
    currentDisplay.textContent = currentNum;
    previousNum = "";
    currentOperator = "";
    previousDisplay.textContent = "";
    operatorDisplay.textContent = "";
  }
}
