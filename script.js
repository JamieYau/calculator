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
      return round(add(num1, num2));
    case "-":
      return round(subtract(num1, num2));
    case "*":
      return round(multiply(num1, num2));
    case "/":
      return round(divide(num1, num2));
    default:
      return null;
  }
}

function round(number) {
  return Math.round(number * 1000) / 1000;
}

currentNum = "";
currentOperator = "";
previousNum = "";

currentDisplay = document.querySelector(".current-text");
operatorDisplay = document.querySelector(".operator-text");
previousDisplay = document.querySelector(".previous-text");

////////////////////////////////Number btns////////////////////////////////
numButtons = document.querySelectorAll(".digits");
numButtons.forEach((btn) =>
  btn.addEventListener("click", (e) => handleNums(e.target.textContent))
);

function handleNums(num) {
  if (currentNum.toString().length <= 12) {
    if (currentNum.toString() === "0") {
      currentNum = num;
    } else {
      currentNum += num;
    }
    currentDisplay.textContent = currentNum;
    operatorDisplay.textContent = currentOperator;
  }
}

////////////////////////////////Operator btns////////////////////////////////
operators = document.querySelectorAll(".operators");
operators.forEach((btn) =>
  btn.addEventListener("click", (e) => handleOperators(e.target.value))
);

function handleOperators(operator) {
  //If something has already been calculated then operators will calculate prior.
  if (currentNum !== "" && previousNum !== "") calculate();
  currentOperator = operator;
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
decimal = document.querySelector(".decimal");
decimal.addEventListener("click", addPoint);
function addPoint() {
  if (!currentNum.toString().includes(".")) currentNum += ".";
  currentDisplay.textContent = currentNum;
}

////////////////////////////////Equals btn////////////////////////////////
equals = document.querySelector(".equals");
equals.addEventListener("click", calculate);

function calculate() {
  if (currentOperator !== "") {
    currentNum = operate(currentOperator, previousNum, currentNum);
    currentDisplay.textContent = currentNum;
    previousNum = "";
    currentOperator = "";
    previousDisplay.textContent = "";
    operatorDisplay.textContent = "";
  }
}

////////////////////////////////KeyboardEventHandler////////////////////////////////
window.addEventListener("keydown", btnPress);

function btnPress(e) {
  if (isFinite(e.key)) handleNums(e.key);
  else if (e.key === "Backspace") deletetxt();
  else if (["+", "-", "*", "/"].includes(e.key)) handleOperators(e.key);
  else if (e.key === ".") addPoint();
  else if (["=", "Enter"].includes(e.key)) calculate();
}
