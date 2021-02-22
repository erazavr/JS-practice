let words = [
  "word",
  "apple",
  "banana",
  "name",
  "pineaple",
  "red",
  "java",
  "pen",
  "bed",
  "man",
  "child",
  "toy",
];
const startButton = document.querySelector("#start-task");
const pauseButton = document.querySelector("#pause-task");
const taskContainer = document.querySelector(".task-container");
const options = document.querySelector(".options");
const currWord = document.querySelector(".curr-word");
const timeCount = document.querySelector(".time");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const result = document.querySelector(".result");
const correctCount = document.querySelector("#correctCount");
const wrongCount = document.querySelector("#wrongCount");

let sortedArr;
let counterSeconds = 0;
let counterMinutes = 0;
let interval;
let correctWords = 0;
let wrongWords = 0;

startButton.addEventListener("click", () => {
  if (taskContainer.classList.contains("hide")) {
    taskContainer.classList.remove("hide");
  }

  startButton.disabled = true;

  correctWords = 0;
  wrongWords = 0;
  move();
  mixWords();
  if (!options.children.length) {
    generateOptions();
  }
  if (pauseButton.classList.contains("hide")) {
    pauseButton.classList.remove("hide");
  }
  if (timeCount.classList.contains("time--red")) {
    timeCount.classList.remove("time--red");
  }
  if (!result.classList.contains("hide")) {
    result.classList.add("hide");
  }
});

// Получаем случайны элемент массива + еще что бы элементы не повторялись

const mixWords = () => {
  for (let i = words.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = words[i];
    words[i] = words[j];
    words[j] = temp;
  }
  sortedArr = words;
};

// Генерируем варианты
const generateOptions = () => {
  for (let i = 0; i < sortedArr.length; i++) {
    let div = document.createElement("div");
    div.classList.add("options-el");
    div.innerHTML = sortedArr[i];
    currWord.innerHTML = sortedArr[Math.floor(Math.random() * i)];
    options.appendChild(div);
    div.addEventListener("click", (e) => {
      if (e.target.innerHTML === currWord.innerHTML) {
        options.innerHTML = "";
        mixWords();
        generateOptions();
        correctWords++;
        correctCount.innerHTML = correctWords;
      } else {
        timeCount.classList.add("time--red");
        setTimeout(() => {
          timeCount.classList.remove("time--red");
        }, 300);
        counterSeconds++;
        wrongWords++;
        wrongCount.innerHTML = wrongWords;
      }
    });
  }
};

let time = function (Seconds) {
  var counterStringseconds = String(Seconds);
  while (counterStringseconds.length < 2) {
    counterStringseconds = "0" + counterStringseconds;
  }
  seconds.innerHTML = counterStringseconds;
  if (counterSeconds === 20 || counterSeconds > 20) {
    startButton.disabled = false;
    timeCount.classList.add("time--red");
    counterSeconds = 0;
    clearInterval(interval);
    setTimeout(() => {
      taskContainer.classList.add("hide");
      result.classList.remove("hide");
    }, 1000);
  }
};

let move = function () {
  interval = setInterval(function () {
    counterSeconds++;
    time(counterSeconds, counterMinutes);
  }, 1000);
  // Кнопка для паузы
  pauseButton.addEventListener("click", () => {
    startButton.disabled = false;
    clearInterval(interval);
    startButton.classList.remove("hide");
  });
};
