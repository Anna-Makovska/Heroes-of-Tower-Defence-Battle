


document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.querySelector('[data-open-btn]');
  const closeBtn = document.querySelector('[data-close-btn]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const linksToClose = document.querySelectorAll('[data-close-on-click]');
  const body = document.body;

  function closeMobileMenu() {
    mobileMenu?.removeAttribute('data-menu-open');
    body?.removeAttribute('data-mobile-menu-open');
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';
  }

  openBtn?.addEventListener('click', () => {
    mobileMenu?.setAttribute('data-menu-open', 'true');
    body?.setAttribute('data-mobile-menu-open', 'true');
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
  });

  closeBtn?.addEventListener('click', () => {
    closeMobileMenu();
  });

  linksToClose.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  const modal = document.querySelector('[data-modal-window="true"]');
  const acceptButton = document.querySelector('[data-accept-cookies="true"]');
  const declineButton = document.querySelector('[data-decline-cookies="true"]');
  const overlay = document.createElement('div');
  overlay.classList.add('modal-overlay-lock');
  body.appendChild(overlay);

  const cookiesAccepted = localStorage.getItem('cookiesAccepted');

  if (!cookiesAccepted) {
    modal?.setAttribute('data-modal-open', 'true');
    body?.setAttribute('data-cookie-modal-open', 'true');
  }

  acceptButton?.addEventListener('click', function () {
    localStorage.setItem('cookiesAccepted', 'true');
    modal?.removeAttribute('data-modal-open');
    body?.removeAttribute('data-cookie-modal-open');
  });

  declineButton?.addEventListener('click', function () {
    localStorage.setItem('cookiesAccepted', 'false');
    modal?.removeAttribute('data-modal-open');
    body?.removeAttribute('data-cookie-modal-open');
  });
});




