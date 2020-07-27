const hamburgerButton = document.querySelector(".hamburger--js");
const navigationMenu = document.querySelector(".navigation--js");
const sticks = document.querySelectorAll(".hamburger__stick");
const body = document.querySelector("#body");

// FUNCTIONS

function blackHamburger() {
  hamburgerButton.classList.remove("hamburger--scroll");
  for (const stick of sticks) {
    stick.classList.remove("stick--scroll");
  }
}

function whiteHamburger() {
  hamburgerButton.classList.add("hamburger--scroll");
  for (const stick of sticks) {
    stick.classList.add("stick--scroll");
  }
}

function changeHamburgerStyle() {
  if (window.pageYOffset >= 1) {
    whiteHamburger();
  } else {
    blackHamburger();
  }
}

// CHANGE HAMBURGER BUTTON STYLE

window.addEventListener("scroll", changeHamburgerStyle);

// OPEN/CLOSE HAMBURGER MENU ON HAMBURGERBUTTON CLICK,
// DISABLE/ENABLE PAGE SCROLL

hamburgerButton.addEventListener("click", () => {
  navigationMenu.classList.toggle("navigation--open");
  hamburgerButton.classList.toggle("hamburger--open");
  for (const stick of sticks) {
    stick.classList.toggle("hamburger--open");
  }
  if (navigationMenu.classList.contains("navigation--open")) {
    body.classList.add("no-scroll");
    blackHamburger();
  } else {
    body.classList.remove("no-scroll");
    if (window.pageYOffset >= 1) {
      whiteHamburger();
    } else {
      blackHamburger();
    }
  }
});

// CLOSE HAMBURGER MENU ON CLICK ANYWHERE,
// ENABLE PAGE SCROLL

navigationMenu.addEventListener("click", () => {
  navigationMenu.classList.remove("navigation--open");
  hamburgerButton.classList.remove("hamburger--open");
  for (const stick of sticks) {
    stick.classList.remove("hamburger--open");
  }
  body.classList.remove("no-scroll");
});