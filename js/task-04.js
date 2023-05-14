const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

decrementEl.addEventListener('click', clickDecrement);
incrementEl.addEventListener('click', clickIncrement);

function clickDecrement() {
    counterValue -= 1;
    updateValue();
}

function clickIncrement() {
    counterValue += 1; 
    updateValue();
}
   
function updateValue () {
    valueEl.textContent = counterValue;
}

