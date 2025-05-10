import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.gallery-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,

    navigation: {
      nextEl: '.right-btn',
      prevEl: '.left-btn',
    },

    breakpoints: {
      1200: {
        slidesPerView: 2,
        
      },
    },
  });
});

document.addEventListener('DOMContentLoaded', function () {
  function moveButtons() {
    const gallerySection = document.querySelector('.gallery-section');
    const navigationContainer = document.querySelector('.navigation-container');
    const mediaQuery = window.matchMedia('(min-width: 1200px)');

    if (mediaQuery.matches) {
      gallerySection.appendChild(navigationContainer);
    } else {
      const galleryContainer = document.querySelector('.gallery-container');
      galleryContainer.appendChild(navigationContainer);
    }
  }

  moveButtons();

  window.addEventListener('resize', moveButtons);
});
