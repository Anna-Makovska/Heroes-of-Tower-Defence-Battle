
document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.querySelector('[data-open-btn]');
  const closeBtn = document.querySelector('[data-close-btn]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const linksToClose = document.querySelectorAll('[data-close-on-click]');
  const body = document.body;

  openBtn?.addEventListener('click', () => {
    mobileMenu?.setAttribute('data-menu-open', 'true');
    body?.setAttribute('data-modal-open', 'true');

    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
  });

  closeBtn?.addEventListener('click', () => {
    mobileMenu?.removeAttribute('data-menu-open');
    body?.removeAttribute('data-modal-open');

    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';
  });

  linksToClose.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.removeAttribute('data-menu-open');
      body?.removeAttribute('data-modal-open');
      openBtn.style.display = 'block';
      closeBtn.style.display = 'none';
    });
  });
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




