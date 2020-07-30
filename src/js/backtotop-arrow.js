import {desktop} from './index.js'
const arrow = document.querySelector(".arrow--js");

function changeArrowVisibility() {
  if (window.pageYOffset > 2 * window.innerHeight) {
    arrow.classList.add("back-to-top--visible");
  } else {
    arrow.classList.remove("back-to-top--visible");
  }
}

function autoScrollBehavior() {
  document.querySelector("#html").style.scrollBehavior = "auto";
}

function changeScrollBehavior() {
  document.querySelector("#html").style.scrollBehavior = "smooth";
  if (!desktop.matches) {
    setTimeout(autoScrollBehavior, 1);
  }
}

window.addEventListener("scroll", changeArrowVisibility);

arrow.addEventListener("click", changeScrollBehavior);