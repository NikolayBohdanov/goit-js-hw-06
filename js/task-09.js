function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color")
buttonEl.addEventListener("click", setRandomHexColor)
function setRandomHexColor(event) {
  const hexColour = getRandomHexColor();
  spanEl.textContent = hexColour;
  body.style.backgroundColor = hexColour;
}