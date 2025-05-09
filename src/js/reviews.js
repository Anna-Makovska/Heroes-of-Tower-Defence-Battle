document.addEventListener('DOMContentLoaded', function () {
  const cardsWrapper = document.querySelector('.cards-wrapper');
  const reviewCards = document.querySelectorAll('.review-card');
  const leftBtn = document.querySelector('.button-left');
  const rightBtn = document.querySelector('.button-right');

  let currentIndex = 0;
  const totalCards = reviewCards.length;

  // Перевіряємо ширину екрану
  function getCardsPerView() {
    return window.innerWidth < 1200 ? (window.innerWidth < 768 ? 1 : 2) : 3;
  }

  let cardsPerView = getCardsPerView();
  const cardWidth = reviewCards[0].offsetWidth + 24; // Враховуємо gap

  function updateSlider() {
    const newTransform = -currentIndex * cardWidth;
    cardsWrapper.style.transform = `translateX(${newTransform}px)`;
  }

  leftBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  rightBtn.addEventListener('click', () => {
    if (currentIndex < totalCards - cardsPerView) {
      currentIndex++;
      updateSlider();
    }
  });

  window.addEventListener('resize', () => {
    cardsPerView = getCardsPerView();
    currentIndex = 0;
    updateSlider();
  });

  updateSlider();
});
