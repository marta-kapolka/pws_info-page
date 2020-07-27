const yearOnWebsite = document.querySelector(".year--js");
const now = new Date();
const year = now.getFullYear();

if (year === 2020) {
  yearOnWebsite.innerHTML = year;
} else {
  yearOnWebsite.innerHTML = "2020-" + year;
}
