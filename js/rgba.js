const parent = document.querySelector('.rgba-range');
const input = parent.querySelectorAll('input');
const bg = document.getElementById('bg');

let redVal = document.getElementById('red-val');
let greenVal = document.getElementById('green-val');
let blueVal = document.getElementById('blue-val');
let opacityVal = document.getElementById('opacity-val');
let rgb = document.getElementById('rgb');
let rgba = document.getElementById('rgba');

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('input', function () {
      let red = document.getElementById('red');
      let green = document.getElementById('green');
      let blue = document.getElementById('blue');
      let opacity = document.getElementById('opacity');

      // Передаю текущие значения input

      redVal.innerText = red.value;
      greenVal.innerText = green.value;
      blueVal.innerText = blue.value;
      opacityVal.innerText = opacity.value;

      // Меняю background input в зависисти от значения

      red.style.background = `rgba(${red.value},0,0)`;
      green.style.background = `rgb(0,${green.value},0)`;
      blue.style.background = `rgb(0,0,${blue.value})`;
      opacity.style.background = `rgba(${red.value},${green.value},${blue.value}, ${opacity.value / 10})`;

      // RGB значения

      rgb.innerText = `${red.value},${green.value},${blue.value}`;

      // RGBA значения

      rgba.innerText = `${red.value},${green.value},${blue.value},${opacity.value}`;

      // Меняю background демонстративного блока

      bg.style.background = `rgba(${red.value}, ${green.value}, ${blue.value}, ${opacity.value / 10}`;
  })
}