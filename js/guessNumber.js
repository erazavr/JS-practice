// let inputNumber = document.getElementById('number');
//     numberBtn = document.querySelector('.numberBtn');
//     text = document.querySelector('.numberText');
//     form = document.querySelector('.guessNumber_form');
//
// let number = Math.floor(Math.random() * 100 + 1);
// let attempts = 0;
// let itsNumber = 0;
// form.addEventListener('submit', handler);
//
// function handler(e) {
//   e.preventDefault();
//   if (inputNumber.value === '') {
//     text.style.color = 'red';
//     text.innerHTML = 'Вы ничего не ввели!'
//   } else if (isNaN(inputNumber.value)) {
//     text.style.color = 'red';
//     text.innerHTML = 'Это строка! Введите число!';
//     inputNumber.value = '';
//     itsNumber++;
//   } else if (+inputNumber.value > 100) {
//     text.style.color = 'red';
//     text.innerHTML = 'Число не должно быть не больше 100!'
//     attempts++
//   } else if (+inputNumber.value < number) {
//     text.style.color = 'black';
//     text.innerHTML = `Неправильно! Загаданное число больше ${inputNumber.value}`;
//     attempts++
//   } else if (+inputNumber.value > number) {
//     text.style.color = 'black';
//     text.innerHTML = `Неправильно! Загаданное число меньше ${inputNumber.value}`;
//     attempts++;
//   } else if (+inputNumber.value === number && attempts === 0){
//       text.innerHTML = `Вау! Отгадал с первой попытки! Молодец! <strong>Число ${number}</strong>. Количество попыток ${attempts}`
//   } else {
//     text.innerHTML = `Поздравляю! Ты угадал число! <strong>Число ${number}</strong>. Количество попыток ${attempts}`
//   }
// }

class GuessNumber {
  constructor(inputValue, currentText) {
    this.number = Math.floor(Math.random() * 100 + 1);
    this.attempts = 0;
    this.currentText = currentText;
  }
  checkNumber(inputNumber) {
    if (inputNumber.value === '') {
      this.currentText.style.color = 'red';
      this.currentText.innerHTML = 'Вы ничего не ввели!'
    } else if (isNaN(inputNumber.value)) {
      this.currentText.style.color = 'red';
      this.currentText.innerHTML = 'Это строка! Введите число!';
      inputNumber.value = ''
    } else if (+inputNumber.value > 100) {
      this.currentText.style.color = 'red';
      this.currentText.innerHTML = 'Число не должно быть не больше 100!';
      this.attempts++
    } else if (+inputNumber.value < this.number) {
      this.currentText.style.color = 'black';
      this.currentText.innerHTML = `Неправильно! Загаданное число больше ${inputNumber.value}`;
      this.attempts++
    } else if (+inputNumber.value > this.number) {
      this.currentText.style.color = 'black';
      this.currentText.innerHTML = `Неправильно! Загаданное число меньше ${inputNumber.value}`;
      this.attempts++;
    } else if (+inputNumber.value === this.number && this.attempts === 0){
      text.innerHTML = `Вау! Отгадал с первой попытки! Молодец! <strong>Число ${this.number}</strong>. Количество попыток ${this.attempts}`
    } else {
      text.innerHTML = `Поздравляю! Ты угадал число! <strong>Число ${this.number}</strong>. Количество попыток ${this.attempts}`
    }
  }
}

const form = document.querySelector('[data-guessNumber-form]');
const inputNumber = document.querySelector('[data-guessNumber-field]');
const text = document.querySelector('[data-guessNumber-text]');

const guessNumber = new GuessNumber(inputNumber, text);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  guessNumber.checkNumber(inputNumber)
});