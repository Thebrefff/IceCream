const menuOverlay = document.querySelector('.mobile-menu');
const closeMenuButton = document.querySelector('.toggle-menu');
const openMenuBtn = document.querySelector('.header__button-icon');

openMenuBtn.addEventListener('click', e => {
  menuOverlay.classList.remove('display-none');
});

closeMenuButton.addEventListener('click', e => {
  menuOverlay.classList.add('display-none');
});
