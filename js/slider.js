// ===== Данные слайдера =====
const SLIDER_DATA = [
    {
        location: 'Rostov-on-Don<br>LCD Admiral',
        size: '81 m²',
        duration: '3.5 months',
        price: 'Upon request',
        picture: 'assets/images/slide-1.jpg'
    },
    {
        location: 'Sochi<br>Thieves',
        size: '105 m²',
        duration: '4 months',
        price: 'Upon request',
        picture: 'assets/images/slide-2.jpg'
    },
    {
        location: 'Rostov-on-Don<br>Patriotic',
        size: '93 m²',
        duration: '3 months',
        price: 'Upon request',
        picture: 'assets/images/slide-3.jpg'
    }
];

// ===== Текущее состояние =====
let activeSlide = 0;

// ===== Элементы интерфейса =====
const locationElement = document.getElementById('city');
const sizeElement = document.getElementById('area');
const durationElement = document.getElementById('time');
const priceElement = document.getElementById('cost');
const pictureElement = document.getElementById('slide-image');

const tabElements = document.querySelectorAll('.projects__tab');
const dotElements = document.querySelectorAll('.dot');

const leftButton = document.querySelector('.arrow--left');
const rightButton = document.querySelector('.arrow--right');

// ===== Функция отображения слайда =====
function displaySlide(slideNumber) {
    // Циклическая навигация
    if (slideNumber < 0) {
        slideNumber = SLIDER_DATA.length - 1;
    }
    if (slideNumber >= SLIDER_DATA.length) {
        slideNumber = 0;
    }

    activeSlide = slideNumber;
    const currentSlide = SLIDER_DATA[slideNumber];

    // Обновление данных на странице
    locationElement.innerHTML = currentSlide.location;
    sizeElement.textContent = currentSlide.size;
    durationElement.textContent = currentSlide.duration;
    priceElement.textContent = currentSlide.price;
    pictureElement.src = currentSlide.picture;

    // Обновление индикаторов
    tabElements.forEach(tab => tab.classList.remove('active'));
    tabElements[slideNumber].classList.add('active');

    dotElements.forEach(dot => dot.classList.remove('active'));
    dotElements[slideNumber].classList.add('active');
}

// ===== Обработчики событий =====

// Навигационные кнопки
leftButton.addEventListener('click', () => {
    displaySlide(activeSlide - 1);
});

rightButton.addEventListener('click', () => {
    displaySlide(activeSlide + 1);
});

// Точечные индикаторы
dotElements.forEach(indicator => {
    indicator.addEventListener('click', () => {
        const slideIndex = Number(indicator.dataset.index);
        displaySlide(slideIndex);
    });
});

// Вкладки проектов
tabElements.forEach(tab => {
    tab.addEventListener('click', () => {
        const slideIndex = Number(tab.dataset.index);
        displaySlide(slideIndex);
    });
});

// ===== Инициализация =====
displaySlide(activeSlide);