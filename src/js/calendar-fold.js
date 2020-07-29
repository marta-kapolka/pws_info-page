const events = document.querySelectorAll(".calendar__event--js");
const containers = document.querySelectorAll('.calendar__button-container');
const windowWidth = window.innerWidth;

function calendarFold() {
  if (windowWidth < 768) {
for (const container of containers) {
    container.innerHTML = '<button class="calendar__button"></button>';
}
    for (const event of events) {
      if (event.classList.contains("calendar__event--past")) {
        event.classList.add("calendar__event--fold");
      }
    }
  }
}

function listenFoldButton(button, i) {
  button.addEventListener('click', function () { unFold(i); });
}

function unFold(i) {
  events[i].classList.toggle('calendar__event--fold');
}

// INITIAL CALENDAR FORM SETUP BASED ON INITIAL VIEWPORT WIDTH
calendarFold();

// CREATE TABLE OF BUTTONS IF CREATED BY calendarFold()
const buttons = document.querySelectorAll('.calendar__button')

buttons.forEach(listenFoldButton);