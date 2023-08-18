export function getDateNumberString(date, shortVersion = false) {
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const year = date.getFullYear();

  return shortVersion ? `${day}.${month}` : `${day}.${month}.${year}`;
}

const MONTHS = [
  "stycznia",
  "lutego",
  "marca",
  "kwietnia",
  "maja",
  "czerwca",
  "lipca",
  "sierpnia",
  "września",
  "października",
  "listopada",
  "grudnia",
];

export function getDateWordsString(date) {
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day}. ${MONTHS[monthIndex]} ${year}`;
}
