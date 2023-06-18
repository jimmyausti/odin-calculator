console.log("hello world");

const display = document.querySelector("#display-screen");
const previousEquation = document.querySelector("#previous-screen");
const mathInput = document.querySelectorAll(".input");

mathInput.forEach((input) => {
  input.addEventListener("click", () => {
    display.innerText += input.innerText;
  });
});

const equate = document.getElementById("equate");

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

equate.addEventListener("click", () => {
  const pattern = /(-?\d+(\.\d+)?)([+\-*/])(-?\d+(\.\d+)?)/;
  const match = display.innerText.match(pattern);
  if (display.innerText) {
    if (match) {
      const initialNumber = parseFloat(match[1]);
      const operand = match[3];
      const finalNumber = parseFloat(match[4]);
      const result = roundResult(operate(operand, initialNumber, finalNumber));
      previousEquation.innerText = `${initialNumber} ${operand} ${finalNumber}`;
      return (display.innerText = result);
    } else {
      display.innerText = "Invalid equation format.";
      return null;
    }
  }
  return null;
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  display.innerText = "";
  previousEquation.innerText = "";
});

const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", () => {
  display.innerText
    ? (display.innerText = display.innerText.slice(0, -1))
    : null;
});

const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};

const operate = (operator, a, b) => {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b === 0) {
        alert('Nah don\'t do that') 
      } 
      return divide(a, b);
    default:
      return null;
  }
};
