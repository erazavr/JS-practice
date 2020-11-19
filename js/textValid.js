let textInput = document.querySelector('.field');
str = document.querySelector('.str');
textNumber = document.querySelector('.text-length');

textInput.addEventListener('keyup', handler);

function handler(event) {
    let number;
    str.innerHTML = event.target.value;
    number = 6 - str.innerHTML.length;
    textNumber.innerHTML = `Вас осталось написать ${number} символов`;
    str.style.color = 'black';
    textNumber.style.color = 'black';
    if(str.innerHTML.length > 6) {
        str.style.color = 'red';
        textNumber.style.color = 'red';
        textNumber.innerHTML = `Нельза вводить больше 6 символов!`;
    }
}