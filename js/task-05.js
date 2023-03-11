// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна 
// отображаться строка "Anonymous".

//<input type="text" id="name-input" placeholder="Please enter your name" />
//<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputEl = document.querySelector('#name-input');
const spanNameEl = document.querySelector('#name-output');
inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    //    console.log(event.currentTarget.value);
    if (!event.currentTarget.value.trim()) {
        return spanNameEl.textContent = 'Anonymous'
    }
    // const trimmed = event.currentTarget.value.trim();
    // return spanNameEl.textContent = trimmed[0].toUpperCase() + trimmed.slice(1, trimmed.length);
     return spanNameEl.textContent = event.currentTarget.value;
   }