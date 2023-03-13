let counterValue = 0;
const plusButton = document.querySelector('[data-action="increment"]');
// console.log(plusButton);
const minusButton = document.querySelector('[data-action="decrement"]');
// console.log(minusButton);
const counterEl = document.querySelector("#value");
// console.log(counterEl);
plusButton.addEventListener("click", onChangeIncrement);
minusButton.addEventListener("click", onChangeDecrement);

function onChangeIncrement() {
  counterValue += 1;
  counterEl.textContent = counterValue;
}
function onChangeDecrement() {
  counterValue -= 1;
  counterEl.textContent = counterValue;
}
