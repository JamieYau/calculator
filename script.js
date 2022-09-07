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

function operator(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return null;
  }
}

inputDisplay = document.querySelector(".input-text")

numButtons = document.querySelectorAll(".digits");
numButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    displayNums(e.target.textContent);
  });
});

function displayNums(num) {
  inputDisplay.textContent = num;
}
