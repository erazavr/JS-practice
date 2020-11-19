let modal = document.querySelector('#modal');
    button = document.querySelector('.modal__btn');
    modalClose = document.querySelector('.modal__close');
    modalBody = document.querySelector('.modal__body');
    modalContent = document.querySelector('.modal__content');


button.onclick = function() {
    modal.style.opacity = 1;
    modalContent.style.opacity = 1;
    modal.style.visibility = 'visible';
    modalContent.style.transform = 'perspective(600px) translate(0px, 0px) rotateX(0deg)';
};

modalClose.onclick = function () {
  modal.style.opacity = 0;
  modal.style.visibility = 'hidden';
};

window.onclick = function (event) {
    if (event.target === modalBody) {
      modal.style.opacity = 0;
      modal.style.visibility = 'hidden';
    }
};