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
  console.log(amount)
  const boxesArray = [];
  for (let i = 0; i < amount; i++){
    const hexColour = getRandomHexColor();
    const divWidth = 30 + (i * 10);
    const divHeight = 30 + (i * 10);
    boxesArray.push(`<div style= 'width: ${divWidth}px; height: ${divHeight}px; background-color: ${hexColour};'></div>`);
    console.log(boxesArray);
  }
  const makeDivGallery = boxesArray.join("");
  console.log(makeDivGallery)
  divEl.insertAdjacentHTML('afterbegin', makeDivGallery);
}

destroyEl.addEventListener("click", destroyBoxes)
function destroyBoxes(event) {
  divEl.innerHTML = "";
}
