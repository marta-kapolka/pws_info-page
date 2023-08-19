import { ROUNDS } from "./rounds-data";

const TODAY = new Date();
const dateFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const firstNextRound = ROUNDS.find((round) => {
  return round.date >= TODAY;
});

const secondNextRound = ROUNDS.find((round) => {
  return round.number === firstNextRound.number + 1;
});

const nextRounds = [firstNextRound, secondNextRound];
const eventsContainerElement = document.querySelector("#events-container");

function createRow(headerTextData, dataTextData, isFirstRow = false) {
  const rowElement = document.createElement("tr");

  const headerElement = document.createElement("th");
  headerElement.classList.add("event__parameter");
  if (isFirstRow) {
    headerElement.classList.add("event__parameter--first");
  }
  const headerText = document.createTextNode(headerTextData);
  headerElement.appendChild(headerText);

  const dataElement = document.createElement("td");
  dataElement.classList.add("event__data");
  if (isFirstRow) {
    dataElement.classList.add("event__data--first");
  }
  const dataText = document.createTextNode(dataTextData);
  dataElement.appendChild(dataText);

  rowElement.append(headerElement, dataElement);

  return rowElement;
}

function createAnchor(name, url) {
  const anchorElement = document.createElement("a");
  anchorElement.classList.add("event__link");
  anchorElement.setAttribute("target", "_blank");
  anchorElement.setAttribute("rel", "noopener");
  anchorElement.setAttribute("href", url);
  const anchorTextElement = document.createTextNode(name);
  anchorElement.appendChild(anchorTextElement);

  return anchorElement;
}

if (eventsContainerElement) {
  nextRounds.forEach((round) => {
    const eventContainerElement = document.createElement("div");
    eventContainerElement.classList.add("event");
    const tableElement = document.createElement("table");
    tableElement.classList.add("event__table");

    // CAPTION

    const captionElement = document.createElement("caption");
    captionElement.classList.add("event__number");
    const captionText = document.createTextNode(
      `Runda ${round.number.toString()}`
    );
    captionElement.appendChild(captionText);

    // TABLE

    const tableBodyElement = document.createElement("tbody");

    const nameRowElement = createRow("Co?", round.name, true);
    const dateRowElement = createRow(
      "Kiedy?",
      new Intl.DateTimeFormat("pl-PL", dateFormatOptions).format(round.date)
    );
    const locationRowElement = createRow("Gdzie?", round.location);
    const clubRowElement = createRow("Kto?", round.shortClub);
    const categoriesRowElement = createRow(
      "Dla kogo?",
      round.categories.join(", ")
    );

    // LINKS

    const linksRowElement = document.createElement("tr");
    const linksHeaderElement = document.createElement("th");
    linksHeaderElement.classList.add(
      "event__parameter",
      "event__parameter--last"
    );
    const linksHeaderText = document.createTextNode("Info...");
    linksHeaderElement.appendChild(linksHeaderText);

    const linksDataElement = document.createElement("td");
    linksDataElement.classList.add("event__data", "event__data--last");

    if (
      !round.eventBulletinLink &&
      !round.eventFacebookLink &&
      !round.eventWebsiteLink
    ) {
      const linksSpanElement = document.createElement("span");
      linksSpanElement.classList.add("event__data--soon");
      const linksTextElement = document.createTextNode("wkrótce...");
      linksSpanElement.appendChild(linksTextElement);
      linksDataElement.appendChild(linksSpanElement);
    }

    if (round.eventBulletinLink) {
      const eventBulletLinkElement = createAnchor(
        "regulamin imprezy",
        round.eventBulletinLink
      );
      linksDataElement.appendChild(eventBulletLinkElement);
    }

    if (round.eventFacebookLink) {
      const eventFacebookLinkElement = createAnchor(
        "wydarzenie na fb",
        round.eventFacebookLink
      );
      linksDataElement.appendChild(eventFacebookLinkElement);
    }

    if (round.eventWebsiteLink) {
      const eventWebsiteLinkElement = createAnchor(
        "strona Organizatora",
        round.eventWebsiteLink
      );
      linksDataElement.appendChild(eventWebsiteLinkElement);
    }

    linksRowElement.append(linksHeaderElement, linksDataElement);

    tableBodyElement.append(
      nameRowElement,
      dateRowElement,
      locationRowElement,
      clubRowElement,
      categoriesRowElement,
      linksRowElement
    );

    tableElement.append(captionElement, tableBodyElement);
    eventContainerElement.appendChild(tableElement);
    eventsContainerElement.appendChild(eventContainerElement);
    console.log(eventsContainerElement);
  });
}
