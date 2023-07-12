const inputEl = document.querySelector("input");
const spanEl = document.querySelector("span");
console.dir(inputEl.value);
window.addEventListener('load', changeValue);
inputEl.addEventListener("input", changeValue);
function changeValue() {
    spanEl.style.fontSize = `${inputEl.value}px`;
}