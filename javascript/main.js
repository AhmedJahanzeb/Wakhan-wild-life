// navbar starts
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("change", () => {
  if (menuToggle.checked) {
    menu.classList.add("active");
  } else {
    menu.classList.remove("active");
  }
});

// navbar ends

// slider section starts
// JavaScript code for the slider
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let index = 0;

const showSlide = (n) => {
  if (n < 0) {
    index = slides.length - 1;
  } else if (n > slides.length - 1) {
    index = 0;
  } else {
    index = n;
  }

  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  dots.forEach((dot) => {
    dot.classList.remove('active');
  });

  slides[index].classList.add('active');
  dots[index].classList.add('active');
};

const nextSlide = () => {
  showSlide(index + 1);
};

const prevSlide = () => {
  showSlide(index - 1);
};

const setSlide = (n) => {
  showSlide(n);
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    setSlide(idx);
  });
});

setInterval(() => {
  nextSlide();
}, 5000);

// slider section ends
