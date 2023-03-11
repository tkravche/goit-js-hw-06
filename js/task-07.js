// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании
//ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const rangeEl = document.querySelector('#font-size-control')
// console.log(rangeEl.valueAsNumber)
const spanEl = document.querySelector('#text')
// console.log(spanEl)

rangeEl.addEventListener('input', onInputRange)
function onInputRange(event) {
    spanEl.style.fontSize =`${event.currentTarget.value}px`;
}