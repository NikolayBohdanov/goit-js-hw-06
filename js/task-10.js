function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createEl = document.querySelector("[data-create]")
const destroyEl = document.querySelector("[data-destroy]")
const inputEl = document.querySelector("input");
const divEl = document.querySelector('[id="boxes"]')

createEl.addEventListener("click", function () {
  const inputEl = document.querySelector("input")
  createBoxes(inputEl.value);
});

function createBoxes(amount) {
  const minValue = Number(inputEl.min);
  const maxValue = Number(inputEl.max);
  const stepValue = Number(inputEl.step);
  const amountOfBoxes = Number(amount);
  const boxesArray = [];
  if (amountOfBoxes >= minValue &&  amountOfBoxes<=maxValue) {
    for (let i = 0; i < amountOfBoxes; i += stepValue) {
      const hexColour = getRandomHexColor();
      const divWidth = 30 + (i * 10);
      const divHeight = 30 + (i * 10);
      boxesArray.push(`<div style= 'width: ${divWidth}px; height: ${divHeight}px; background-color: ${hexColour};'></div>`);
      console.log(boxesArray);
    }
    const makeDivGallery = boxesArray.join("");
    console.log(makeDivGallery)
    divEl.insertAdjacentHTML('beforeend', makeDivGallery);
  } else {
    alert('You are out of the permitted value');
  }
}

destroyEl.addEventListener("click", destroyBoxes)
function destroyBoxes() {
  divEl.innerHTML = "";
  inputEl.value = "";
}