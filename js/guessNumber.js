const guessNumForm = document.querySelector('[data-guessNumber-form]');
const inputNumber = document.querySelector('[data-guessNumber-field]');
const text = document.querySelector('[data-guessNumber-text]');


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



const guessNumber = new GuessNumber(inputNumber, text);

guessNumForm.addEventListener('submit', (e) => {
  e.preventDefault();
  guessNumber.checkNumber(inputNumber)
});