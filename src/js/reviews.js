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
});
