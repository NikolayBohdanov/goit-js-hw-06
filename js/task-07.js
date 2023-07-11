const inputEl = document.querySelector("input");
const spanEl = document.querySelector("span");
console.dir(inputEl.value);

inputEl.addEventListener("input", changeValue);
function changeValue(event) {
    console.log(event.currentTarget.value);
    console.dir(spanEl.style)
    spanEl.style.fontSize = `${event.currentTarget.value}px`;
}