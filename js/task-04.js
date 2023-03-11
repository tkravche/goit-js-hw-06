// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
//     Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй
// её значением 0.
//     Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
//     Обновляй интерфейс новым значением переменной counterValue.
let counterValue = 0;
const plusButton = document.querySelector('[data-action="increment"]');
// console.log(plusButton);
const minusButton = document.querySelector('[data-action="decrement"]');
// console.log(minusButton);
const counterEl = document.querySelector('#value');
// console.log(counterEl);
plusButton.addEventListener('click', onChangeIncrement);
minusButton.addEventListener('click', onChangeDecrement);

function onChangeIncrement() {
    counterValue += 1;
    counterEl.textContent = counterValue;
    // console.log(counterValue);
}
function onChangeDecrement() {
    counterValue -= 1;
    counterEl.textContent = counterValue;
    // console.log(counterValue);
}

