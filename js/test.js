const form = document.querySelector('.test-form');
const questionsBox = document.querySelector('.test-form__questions');



questions.forEach((question, i) => {
  let container = document.createElement('div');
  let qNumber = document.createElement('h2');
  let qTitle = document.createElement('h3');

  qNumber.innerText = `Вопрос ${i + 1}`;
  qTitle.innerText = question.q;

  container.appendChild(qNumber);
  container.appendChild(qTitle);

  question.options.forEach((option, i) => {
    let inputsDiv = document.createElement('div');
    let optionInput = document.createElement('input');
    let label = document.createElement('label');

    optionInput.type = 'radio';
    optionInput.name = question.name;
    optionInput.id = question.name + i;

    label.innerText = option;
    label.htmlFor = question.name + i;

    inputsDiv.appendChild(optionInput);
    inputsDiv.appendChild(label);
    container.appendChild(inputsDiv);
  });
  questionsBox.appendChild(container)
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const optionInput = document.querySelectorAll('.test-form__questions input');
  const answers = document.querySelector('.answers');
  const questionsText = document.querySelector('.questions');
  const questionsCount = document.querySelector('.questions-count');
  const correctAnswers = document.querySelector('.correct-answers');
  const userAnswers = document.querySelector('.your-answers');
  const points = document.querySelector('.points');
  const restartBlock = document.querySelector('.restart');

  //Buttons
  const restartBtn = document.querySelector('.restartBtn');
  const readyBtn = document.querySelector('.ready');


  questionsBox.classList.add('hide');
  readyBtn.classList.add('hide');

  restartBlock.classList.remove('hide')
  answers.classList.remove('hide');
  restartBtn.classList.remove('hide');

  questionsText.innerHTML = '<h3>Вопросы:</h3>';
  correctAnswers.innerHTML = '<h3>Правильный ответ:</h3>';
  userAnswers.innerHTML = '<h3>Ваш ответ:</h3>';
  questionsCount.innerText = `Всего вопросов: ${questions.length}`;

  let correctInputs = [];
  optionInput.forEach(item => {
    if (item.checked) {
      correctInputs.push(item);
      item.checked = false
    }
  });

  let pointsSum = 0;

  restartBtn.addEventListener('click', () => {
    questionsBox.classList.remove('hide');
    readyBtn.classList.remove('hide');

    restartBlock.classList.add('hide');
    answers.classList.add('hide');

    correctInputs = [];
    questionsText.innerHTML = '';
    correctAnswers.innerHTML = '';
    userAnswers.innerHTML = '';
  });
  for (let i = 0; i < questions.length; i++) {
    let qTitle = document.createElement('p');
    let correctAnswer = document.createElement('p');
    let uAnswers = document.createElement('p');
    qTitle.innerText = questions[i].q;
    correctAnswer.innerText = questions[i].options[questions[i].answer];

    uAnswers.innerText = correctInputs.length ? correctInputs[i].labels[0].innerText : 'Ответа нет';


    questionsText.appendChild(qTitle);
    correctAnswers.appendChild(correctAnswer);
    userAnswers.appendChild(uAnswers);



    if (correctInputs.length && questions[i].answer === +correctInputs[i].id.slice(-1)) {
        pointsSum+=questions[i].point;
        uAnswers.innerHTML += ' (+10 б)'
    }
  }

  points.innerText = `Баллы: ${pointsSum}`

});
