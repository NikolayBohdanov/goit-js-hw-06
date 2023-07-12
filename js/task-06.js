const inputEl = document.querySelector("input");
console.dir(inputEl);
inputEl.addEventListener("blur", validateDataLength);

function validateDataLength(event) {
    console.log(typeof event.currentTarget.dataset.length)
    console.log(typeof event.currentTarget.value.length)
    event.currentTarget.dataset.length/event.currentTarget.value.trim().length === 1 ?
        event.currentTarget.classList.add("valid") & event.currentTarget.classList.remove("invalid") :
        event.currentTarget.classList.add("invalid") & event.currentTarget.classList.remove("valid");
}