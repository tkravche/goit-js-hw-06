const rangeEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

spanEl.style.fontSize = `${rangeEl.value}px`;

rangeEl.addEventListener("input", onInputRange);

function onInputRange(event) {
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
}
