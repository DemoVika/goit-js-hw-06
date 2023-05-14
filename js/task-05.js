const nameInputEl = document.querySelector('#name-input');
console.log(nameInputEl.value);
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', updateName);

function updateName() {
    if (nameInputEl.value) {
        nameOutputEl.textContent = nameInputEl.value;
    } else {
        nameOutputEl.textContent = 'Anonymous';
    }
}


