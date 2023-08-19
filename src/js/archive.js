const button = document.querySelector(".archive__button--js");
const archive = document.querySelector(".archive__flex-container--js");

const toggleArchive = () => {
  archive.classList.toggle("archive__flex-container--hidden");
  button.classList.toggle("archive__button--open");
  button.blur();
};

button.addEventListener("click", toggleArchive);
