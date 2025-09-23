let a = '';
let b = '';
let operator = '';

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

function clearVariables () {
  a = '';
  b = '';
  operator = '';
}

// Clear button
clearBtn.addEventListener('click', () => {
  updateDisplay('');
  clearVariables();
});

// Number buttons
for (let btn of numBtns) {
  btn.addEventListener('click', (e) => {
    const btnContent = e.target.textContent;
    b += btnContent;
    updateDisplay(b);
  });
}

// Operator buttons
for (let btn of opBtns) {
  btn.addEventListener('click', (e) => {
    if (b === '') {
      operator = e.target.textContent;
      return;  // Exits if operator pressed twice in a row
    }
    
    if (a === '') {
      a = b;
    } else {
      a = operate(+a, +b, operator);
    }

    updateDisplay(a);
    b = '';
    operator = e.target.textContent;
  });
}