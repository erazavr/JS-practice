const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const bubble = document.querySelector('.bubbles');

// Create bubbles on slider

for (let i = 0; i < carouselImages.length - 1; i++) {
    let div = document.createElement('div');
    div.classList.add('bubble');
    bubble.appendChild(div)
}

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter

let bubbles = document.querySelectorAll('.bubble');
bubbles[0].style.display = 'none';
let counter = 1;
const size = carouselImages[0].clientWidth;

bubbles[counter].classList.add('bubble-active');
carouselSlide.style.transform = `translateX(${-size * counter}px)`;

//Button Listeners

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;

    if (counter > 5) {
        counter = 1
    }

    // Checking if prev bubble has bubble-active class remove it

    if (bubbles[counter - 1].classList.contains('bubble-active')) {
        bubbles[counter - 1].classList.remove('bubble-active')
    }

    //  When we stay on last bubble we remove bubble-active class

    if (bubbles[carouselImages.length - 2].classList.contains('bubble-active')) {
        bubbles[carouselImages.length - 2].classList.remove('bubble-active')
    }
    // Just add bubble bubble-active class

    bubbles[counter].classList.add('bubble-active');
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    if (counter <= 0) {
        counter = 5;

        bubbles[counter].classList.add('bubble-active')
    }
    // Checking if prev bubble has bubble-active class remove it
    if (bubbles[counter === 5 ? counter - 2 : counter + 1].classList.contains('bubble-active')) {
        bubbles[counter === 5 ? counter - 2 : counter + 1].classList.remove('bubble-active')
    }

    //  When we stay on first bubble we remove bubble-active class
    if (bubbles[1].classList.contains('bubble-active')) {
        bubbles[1].classList.remove('bubble-active')
    }

    // Just add bubble bubble-active class

    bubbles[counter].classList.add('bubble-active');
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
});


