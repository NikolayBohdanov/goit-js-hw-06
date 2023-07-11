let counterValue = 0;
const refs = {
    plusButton: document.querySelector('[data-action="increment"]'),
    minusButton: document.querySelector('[data-action="decrement"]'),
    valueEl: document.querySelector('[id="value"]'),
}
refs.valueEl.textContent = counterValue;
function increaseCounterValue(event) {
   return refs.valueEl.textContent = counterValue += 1;
}
function decreaseCounterValue(event) {
   return refs.valueEl.textContent = counterValue -= 1;
}
refs.minusButton.addEventListener('click', decreaseCounterValue);
refs.plusButton.addEventListener('click', increaseCounterValue);
