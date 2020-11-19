class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear()
  }
  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined
  }
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;


    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand) {
      this.compute()
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = ''
  }
  compute() {
    let computation;
    let prev = +this.previousOperand;
    let current = +this.currentOperand;

    switch (this.operation) {
      case '+':
        computation = current + prev;
        break;
      case '-':
        computation = current - prev;
        break;
      case '*':
        computation = current * prev;
        break;
      case '÷':
        computation = current / prev;
        break;
      default:
        return
    }
    this.currentOperand = computation;
    this.previousOperand = '';
    this.operation = undefined
  }
  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigit = parseFloat(stringNumber.split('.')[0]);
    const decimalDigit = stringNumber.split('.')[1];

    let integerDisplay;
    if (isNaN(integerDigit)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigit.toLocaleString('en', {
        maximumFractionDigits: 0
      })
    }
    if (decimalDigit) {
      return `${integerDisplay}.${decimalDigit}`
    } else {
      return integerDisplay
    }
  }
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
    if (this.operation) {
      this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }

  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

clearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay()
  })
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay()

  })
});

equalsButton.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay()
});

deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});
