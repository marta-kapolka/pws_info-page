const arrow = document.querySelector('.arrow--js');

function changeArrowVisibility() {
    if (window.pageYOffset > (3 * window.innerHeight)) {
        arrow.classList.add('visible');
    } else {
        arrow.classList.remove('visible');
    }
}

window.addEventListener('scroll', changeArrowVisibility);