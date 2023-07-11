const refs = {
    inputEl: document.querySelector('[id="name-input"]'),
    outputSpan: document.querySelector('[id="name-output"]'),
}
console.dir(refs.inputEl);
refs.inputEl.addEventListener("input", changeSpanValue)
function changeSpanValue(event) {
    event.currentTarget.value ? refs.outputSpan.textContent = event.currentTarget.value : refs.outputSpan.textContent = "Anonymous"
}