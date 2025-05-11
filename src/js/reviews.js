import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.reviews-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,

    navigation: {
      nextEl: '.reviews-arrows-next',
      prevEl: '.reviews-arrows-prev',
    },

    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });

  const prevBtn = document.querySelector('.reviews-arrows-prev');
  const nextBtn = document.querySelector('.reviews-arrows-next');

  function activateButton(button) {
    button.classList.add('active');
    setTimeout(() => {
      button.classList.remove('active');
    }, 300);
  }

  prevBtn.addEventListener('click', () => activateButton(prevBtn));
  nextBtn.addEventListener('click', () => activateButton(nextBtn));
}); 
