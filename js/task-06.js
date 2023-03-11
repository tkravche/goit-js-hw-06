// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное
//  количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

//     Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//     Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputEl = document.querySelector('#validation-input');
const inputLength = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener('blur', onBlurCheck)

function onBlurCheck(event) {
    if (event.currentTarget.value.length === inputLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid')
    };
}
