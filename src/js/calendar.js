import { ROUNDS } from "./rounds-data";

const TODAY = new Date();
const dateFormatOptions = {
  month: "2-digit",
  day: "2-digit",
};
let isCurrentRoundAlreadyMarked = false;

function addCalendarDataClass(element) {
  return element.classList.add("calendar__data");
}

function addDataLabel(element, label) {
  return element.setAttribute("data-label", label);
}

const table = document.querySelector("#table-body");

ROUNDS.forEach((round) => {
  const rowElement = document.createElement("tr");
  rowElement.classList.add("calendar__event", "calendar__event--js");

  if (round.date < TODAY) {
    rowElement.classList.add("calendar__event--past");
  } else if (!isCurrentRoundAlreadyMarked) {
    rowElement.classList.add("calendar__event--current");
    isCurrentRoundAlreadyMarked = true;
  }

  // NUMBER
  const numberElement = document.createElement("td");
  addCalendarDataClass(numberElement);
  addDataLabel(numberElement, "Runda");
  numberElement.setAttribute(
    "data-date",
    new Intl.DateTimeFormat("pl-PL", dateFormatOptions).format(round.date)
  );
  const roundNumberText = document.createTextNode(round.number.toString());
  const buttonContainerElement = document.createElement("div");
  buttonContainerElement.classList.add("calendar__button-container");

  numberElement.appendChild(roundNumberText);
  numberElement.appendChild(buttonContainerElement);

  // NAME
  const nameElement = document.createElement("td");
  addCalendarDataClass(nameElement);
  addDataLabel(nameElement, "Nazwa imprezy");
  const name = document.createTextNode(round.name);
  nameElement.appendChild(name);

  if (!!round.additionalName) {
    const lineBreak = document.createElement("br");
    const additionalName = document.createTextNode(round.additionalName);
    nameElement.appendChild(lineBreak);
    nameElement.appendChild(additionalName);
  }

  // DATE

  const dateElement = document.createElement("td");
  addCalendarDataClass(dateElement);
  addDataLabel(dateElement, "Termin");
  const date = document.createTextNode(
    new Intl.DateTimeFormat("pl-PL", dateFormatOptions).format(round.date)
  );
  dateElement.appendChild(date);

  // LOCATION

  const locationElement = document.createElement("td");
  addCalendarDataClass(locationElement);
  addDataLabel(locationElement, "Miejsce");
  const location = document.createTextNode(round.location);
  locationElement.appendChild(location);

  // CLUB

  const clubElement = document.createElement("td");
  addCalendarDataClass(clubElement);
  addDataLabel(clubElement, "Organizator");
  const club = document.createTextNode(round.club);
  clubElement.appendChild(club);

  if (!!round.additionalClub) {
    const lineBreak = document.createElement("br");
    const additionalClub = document.createTextNode(round.additionalClub);
    clubElement.appendChild(lineBreak);
    clubElement.appendChild(additionalClub);
  }

  // CATEGORIES

  const categoriesElement = document.createElement("td");
  addCalendarDataClass(categoriesElement);
  addDataLabel(categoriesElement, "Kategorie");
  const categories = document.createTextNode(round.categories.join(", "));
  categoriesElement.appendChild(categories);

  rowElement.appendChild(numberElement);
  rowElement.appendChild(nameElement);
  rowElement.appendChild(dateElement);
  rowElement.appendChild(locationElement);
  rowElement.appendChild(clubElement);
  rowElement.appendChild(categoriesElement);

  table.appendChild(rowElement);
});
