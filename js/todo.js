const message = document.querySelector('.todo_list__field');
const formTodo = document.querySelector('.new_todo');
const list = document.querySelector('.todo');

formTodo.addEventListener('submit', function (e) {
  e.preventDefault();
  if (message.value === '') {
   message.placeholder = 'Вы ничего не ввели'
  } else {
    message.placeholder = '';
    let li = document.createElement('li');
    let span = document.createElement('span');
    let newBtn = document.createElement('button');

    li.classList.add('todo_item');
    span.innerHTML = message.value;
    span.classList.add('todo_item-title')
    newBtn.classList.add('todo_item-btn');
    newBtn.innerHTML = '<i class="far fa-trash-alt"></i>';

    li.appendChild(span);
    li.appendChild(newBtn);
    list.appendChild(li);

    li.addEventListener('click', function () {
      if (this.classList.contains('checked')) {
        this.classList.remove('checked')
      } else {
        this.classList.add('checked')
      }
    });
    newBtn.addEventListener('click', function () {
      list.removeChild(li)
    })
  }


});



