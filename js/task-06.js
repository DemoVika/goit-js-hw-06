const validationInputEl = document.querySelector('#validation-input');


const lengthInput = validationInputEl.getAttribute('data-length');
console.log(lengthInput);



validationInputEl.addEventListener('blur', () => {
    if (validationInputEl.value.length == lengthInput) {
        validationInputEl.classList.add('valid')
       validationInputEl.classList.remove('invalid')   
    } else {
        validationInputEl.classList.add('invalid')
        validationInputEl.classList.remove('valid')
    }
})




