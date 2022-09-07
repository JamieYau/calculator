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
  num1 = parseInt(num1);
  num2 = parseInt(num2);
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
operators = document.querySelectorAll(".operators");
numButtons = document.querySelectorAll(".digits");
equals = document.querySelector(".equals");

numButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleNums(e.target.textContent);
  });
});

function handleNums(num) {
  currentNum += num;
  currentDisplay.textContent = currentNum;
  if (currentOperator !== "") {
    operatorDisplay.textContent = currentOperator;
  }
}

operators.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleOperators(e.target.textContent);
  });
});

function handleOperators(value) {
  currentOperator = value;
  currentDisplay.textContent = currentOperator;
  previousNum = currentNum;
  previousDisplay.textContent = previousNum;
  currentNum = "";
}

equals.addEventListener("click", (e) => {
  currentDisplay.textContent = operate(
    currentOperator,
    previousNum,
    currentNum
  );
  previousDisplay.textContent = "";
  operatorDisplay.textContent = "";
});
