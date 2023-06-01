const slider = document.querySelector('.slider');
const sliderInner = document.querySelector('.slider-inner');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
const slideWidth = slides[0].offsetWidth;

function adjustSlideSize() {
    slides.forEach(slide => {
        const img = slide.querySelector('img');
        if (img.width > 1200) {
            img.style.width = '100%';
            img.style.height = 'auto';
        }
    });
}

function goToNextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    sliderInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function goToPrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    sliderInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// setInterval(goToNextSlide, 3000);

nextBtn.addEventListener('click', goToNextSlide);
prevBtn.addEventListener('click', goToPrevSlide);
adjustSlideSize();

window.addEventListener('resize', adjustSlideSize);

// Disable automatic slide change on mobile devices
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    clearInterval(goToNextSlide);
}

function adjustSlideSize() {
    slides.forEach(slide => {
        const img = slide.querySelector('img');
        if (img.width > 1200) {
            img.style.width = '100%';
            img.style.height = 'auto';
        }
    });
}

window.addEventListener('resize', adjustSlideSize);

function goToNextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    sliderInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function goToPrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    sliderInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

adjustSlideSize();
// ......................................................
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
});

function smoothScroll(target) {
    const targetSection = document.querySelector(target);
    const targetOffsetTop = targetSection.offsetTop;
    const headerHeight = document.querySelector('nav').offsetHeight;

    window.scrollTo({
        top: targetOffsetTop - headerHeight,
        behavior: 'smooth'
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
});

function scrollToSection(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const targetOffsetTop = targetSection.offsetTop;
    const headerHeight = document.querySelector('nav').offsetHeight;

    window.scrollTo({
        top: targetOffsetTop - headerHeight,
        behavior: 'smooth'
    });
}