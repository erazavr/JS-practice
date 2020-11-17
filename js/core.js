// TEXT
function text() {
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
}
// RADIO BUTTONS

function radio() {
    let radio = document.getElementsByName('prim');
    let fruitTitle = document.querySelector('.fruitTitle');
    let fruitInfo = document.querySelector('.fruitInfo');
    for(let i = 0; i < radio.length; i++) {
        radio[i].onchange = checkRadio

    }
    function checkRadio() {
        if(this.value === 'banana') {
            fruitTitle.innerHTML = 'Бананы';
            fruitInfo.innerHTML = 'Он сытный, вкусный и мгновенно дарит заряд бодрости. Когда мы едим бананы, то получаем витамины C и E, а также витамин B6, отвечающий за поддержание уровня глюкозы в крови и помогающий успокоить нервную систему. А благодаря содержащемуся в бананах железу можно поднять уровень гемоглобина в крови.'
        } else if(this.value === 'apple') {
            fruitTitle.innerHTML = 'Яблоки';
            fruitInfo.innerHTML = 'В яблоках содержатся витамины A, С, В1, В2, РР и Е, а также магний, фосфор, йод, железо, селен, калий, кальций и цинк. В совокупности они придают нам жизненных сил, помогают справляться со стрессовыми ситуациями, улучшают работу мозга и укрепляют сердечно-сосудистую систему.'
        } else {
            fruitTitle.innerHTML = 'Ананасы';
            fruitInfo.innerHTML = 'Ананас содержит очень мало белков и жиров, но много углеводов и сахаров. В нем имеются витамины А, В1, В2, В3, В6, В9, С, Е, РР, макроэлементы (кальций, магний, натрий, калий, фосфор), железо, медь. В соке ананаса содержится растительный фермент бромелайн, повышающий ферментативную активность.'
        }
    }
}
radio();
text();
