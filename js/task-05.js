const inputEl = document.querySelector("#name-input");
const spanNameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (!event.currentTarget.value.trim()) {
    spanNameEl.textContent = "Anonymous";
    return;
  }
  spanNameEl.textContent = event.currentTarget.value;
}
