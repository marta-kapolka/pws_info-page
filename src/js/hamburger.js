const hamburgerButton = document.querySelector('.hamburger--js');
const navigationMenu = document.querySelector('.navigation--js');

hamburgerButton.addEventListener('click', () => {
    navigationMenu.classList.toggle('navigation--open');
});

navigationMenu.addEventListener('click', () => {
    navigationMenu.classList.remove('navigation--open');
});