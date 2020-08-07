import {tablet} from './index.js'

const events = document.querySelectorAll(".calendar__event--js");
const containers = document.querySelectorAll(".calendar__button-container");

function calendarFold() {
  let windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    for (const container of containers) {
      container.innerHTML = '<button class="calendar__button" aria-label="Otwórz menu"></button>';
    }
    for (const event of events) {
      if (event.classList.contains("calendar__event--past")) {
        event.classList.add("calendar__event--fold");
      }
    }
    const buttons = document.querySelectorAll(".calendar__button");

    buttons.forEach(listenFoldButton);
  } else {
    for (const container of containers) {
      container.innerHTML = "";
    }
    for (const event of events) {
      event.classList.remove("calendar__event--fold");
    }
  }
}

function listenFoldButton(button, i) {
  button.addEventListener("click", function () {
    unFold(i);
  });
}

function unFold(i) {
  events[i].classList.toggle("calendar__event--fold");
}

// INITIAL CALENDAR FORM SETUP BASED ON INITIAL VIEWPORT WIDTH
calendarFold();

tablet.addEventListener("change", function() {
  calendarFold();
});