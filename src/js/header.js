
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const openMenuBtn = document.querySelector('[data-open-btn]');
  const closeMenuBtn = document.querySelector('[data-close-btn]');

  if (openMenuBtn && closeMenuBtn && mobileMenu) {
    openMenuBtn.addEventListener('click', function () {
      mobileMenu.setAttribute('data-menu-open', 'true');
    });

    closeMenuBtn.addEventListener('click', function () {
      mobileMenu.removeAttribute('data-menu-open');
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('[data-modal-window="true"]');
  const acceptButton = document.querySelector('[data-accept-cookies="true"]');
  const declineButton = document.querySelector('[data-decline-cookies="true"]');

  const cookiesAccepted = localStorage.getItem('cookiesAccepted');

  if (!cookiesAccepted) {
    modal.setAttribute('data-modal-open', 'true');
    document.body.setAttribute('data-modal-body', 'true');
  }

  acceptButton.addEventListener('click', function () {
    localStorage.setItem('cookiesAccepted', 'true');
    modal.removeAttribute('data-modal-open');
    document.body.removeAttribute('data-modal-body');
  });

  declineButton.addEventListener('click', function () {
    localStorage.setItem('cookiesAccepted', 'false');
    modal.removeAttribute('data-modal-open');
  });
});




document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.querySelector('[data-open-btn]');
  const closeBtn = document.querySelector('[data-close-btn]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const linksToClose = document.querySelectorAll('[data-close-on-click]');
  const body = document.querySelector('[data-body]');

  openBtn?.addEventListener('click', () => {
    mobileMenu?.setAttribute('data-menu-open', 'true');
    body?.setAttribute('data-modal-open', 'true');
  });

  closeBtn?.addEventListener('click', () => {
    mobileMenu?.removeAttribute('data-menu-open');
    body?.removeAttribute('data-modal-open');
  });

  linksToClose.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.removeAttribute('data-menu-open');
      body?.removeAttribute('data-modal-open');
    });
  });
});








