const inputEl = document.querySelector("#validation-input");
const inputLength = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", onBlurCheck);

function onBlurCheck(event) {
  if (event.currentTarget.value.length === inputLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
