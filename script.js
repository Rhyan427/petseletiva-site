const carrossel = document.querySelector('ul');
const carrosselDiv = document.querySelector('.carrossel');
let index = 0;
const totalSlides = carrossel.children.length;

const buttonAnt = document.createElement('button');
buttonAnt.innerText = '<';
buttonAnt.className = 'carrossel-button buttonAnt'

const buttonNext = document.createElement('button');
buttonNext.innerText = '>';
buttonNext.className = 'carrossel-button buttonNext';

carrosselDiv.appendChild(buttonAnt);
carrosselDiv.appendChild(buttonNext);

function changeSlide(newIndex){
    index = (newIndex + totalSlides) % totalSlides;
    const slideWidth = carrossel.children[0].offsetWidth + 40;

    carrossel.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
    });
}

function nextSlide(){
    changeSlide(index + 1);
}

function prevSlide(){
    changeSlide(index - 1);
}

let intervalo = setInterval(nextSlide, 6000);

function startInterval() {
    clearInterval(intervalo);
    intervalo = setInterval(nextSlide, 6000);
}

buttonNext.addEventListener('click', () => {
    nextSlide();
    startInterval();
});
buttonAnt.addEventListener('click', () => {
    prevSlide();
    startInterval();
});

carrossel.addEventListener('mouseenter', () => clearInterval(intervalo));
carrossel.addEventListener('mouseleave', () => startInterval());

startInterval();