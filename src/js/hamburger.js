const hamburgerButton = document.querySelector('.hamburger--js');
const navigationMenu = document.querySelector('.navigation--js');
const sticks = document.querySelectorAll('.hamburger__stick');
const body = document.querySelector('#body');

hamburgerButton.addEventListener('click', () => {
    navigationMenu.classList.toggle('navigation--open');
    hamburgerButton.classList.toggle('hamburger--open');
    for (const stick of sticks) {
        stick.classList.toggle('hamburger--open')
    }
    if (navigationMenu.classList.contains('navigation--open')) {
        body.classList.add('no-scroll')
    } else {
        body.classList.remove('no-scroll')
    }
});

navigationMenu.addEventListener('click', () => {
    navigationMenu.classList.remove('navigation--open');
    hamburgerButton.classList.remove('hamburger--open');
    for (const stick of sticks) {
        stick.classList.remove('hamburger--open')
    }
    body.classList.remove('no-scroll');
});

function changeHamburgerStyle() {
    if (window.pageYOffset >= 1 && !navigationMenu.classList.contains('navigation--open')) {
        hamburgerButton.classList.add('hamburger--scroll');
        for (const stick of sticks) {
            stick.classList.add('stick--scroll')
        }
    } else {
        hamburgerButton.classList.remove('hamburger--scroll');
        for (const stick of sticks) {
            stick.classList.remove('stick--scroll')
        }
    }
}

window.addEventListener('scroll', changeHamburgerStyle);