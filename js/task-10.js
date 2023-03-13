function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amountInput = document.querySelector("input");
const boxesDiv = document.querySelector("#boxes");

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

createButton.addEventListener("click", () => createBoxes(amountInput.value));

let boxWidth = 20;
let boxHeight = 20;
function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const createdElement = document.createElement("div");
    boxWidth += 10;
    boxHeight += 10;
    createdElement.style.height = `${boxWidth}px`;
    createdElement.style.width = `${boxHeight}px`;
    createdElement.style.backgroundColor = getRandomHexColor();
    boxesDiv.append(createdElement);
  }
}

destroyButton.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxesDiv.innerHTML = "";
}
