console.log("hello world");



const display = document.querySelector("#display-screen");
const mathInput = document.querySelectorAll(".input");

mathInput.forEach((input) => {
  input.addEventListener("click", () => {
    display.innerText += input.innerText;
  });
});

const equate = document.getElementById("equate");

equate.addEventListener("click", () => {
    const equation = display.innerText.split('')
  const firstNumber = equation[0];
  const operator = equation[1];
  const secondNumber = equation[2];
  const result = operate(operator, firstNumber, secondNumber);
  display.innerText = result;
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  display.innerText = "";
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
      a = Number(a)
      b = Number(b)
    switch (operator) {
      case "+":
        return add(a, b);
      case "-":
        return subtract(a, b);
      case "*":
        return multiply(a, b);
      case "/":
        return divide(a, b);
      default:
        return null;
    }
  };