// licznik
let counter = localStorage.getItem("counterFromLs") || 0;

// querySelectors
const przycisk = document.querySelector(".button");
const popup = document.querySelector(".popup");
const mainPopup = document.querySelector(".popup-main");
const przyciskRestartowania = document.querySelector(".restart-button");
const closeIcon = document.querySelector(".closingIcon");

//events
przycisk.addEventListener("click", () => {
  popup.classList.toggle("popup-non-active");
  const czyIstniejePopup =
    document.getElementsByClassName("popup-non-active").length > 0;
  // zdarzenie powyzej wyklucza zliczanie klikniecia przycisku podczas, gdy alert jest wyswietlany (w zadaniu nie dopacowano czy ma byc zliczane klikciecie buttona, gdy alert jest wyswielony - zalozylem, ze nie)
  if (!czyIstniejePopup) {
    counter++;
    localStorage.setItem("counterFromLs", counter);
    document.getElementById("counter-value").innerHTML = counter;
  }
  if (counter == 6) {
    przyciskRestartowania.classList.toggle("button-non-active");
  }
});

przyciskRestartowania.addEventListener("click", () => {
  if (counter >= 6) {
    przyciskRestartowania.classList.toggle("button-non-active");
  }
  counter = 0;
  localStorage.setItem("counterFromLs", counter);
  document.getElementById("counter-value").innerHTML = counter;
  return counter;
});

document.addEventListener("click", function (event) {
  const isClickInsideElement =
    mainPopup.contains(event.target) || przycisk.contains(event.target);
  const czyIstenieje =
    document.getElementsByClassName("popup-non-active").length > 0;
  if (!isClickInsideElement && !czyIstenieje) {
    popup.classList.toggle("popup-non-active");
  }
});

closeIcon.addEventListener("click", () => {
  console.log("klik na x");
  popup.classList.toggle("popup-non-active");
});
