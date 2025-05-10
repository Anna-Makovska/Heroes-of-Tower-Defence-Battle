document.addEventListener('DOMContentLoaded', function () {
  const accordionButtons = document.querySelectorAll('[data-accordion-toggle]');

  accordionButtons.forEach(button => {
    button.addEventListener('click', function () {
      const item = button.closest('[data-accordion-item]');
      const content = item.querySelector('[data-accordion-content]');
      const icon = button.querySelector('[data-icon-faq]');

      const isActive = item.dataset.active === 'true';

      if (isActive) {
        item.dataset.active = 'false';
        content.style.maxHeight = null;
        if (icon) {
          icon.style.transform = 'rotate(0deg)';
        }
      } else {
        item.dataset.active = 'true';
        content.style.maxHeight = content.scrollHeight + 'px';
        if (icon) {
          icon.style.transform = 'rotate(180deg)';
        }
      }
    });
  });
});





