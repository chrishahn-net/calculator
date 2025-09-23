let a;
let b;
let operator;

const display = document.querySelector('.display');
const clearBtn = document.querySelector('button.clear');
const equalBtn = document.querySelector('button.equal');
const numBtns = document.querySelectorAll('button.number');
const opBtns = document.querySelectorAll('button.operator');

function add (a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
  return a / b;
}

function operate (a, b, operator) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

function updateDisplay (content) {
  display.textContent = content;
}